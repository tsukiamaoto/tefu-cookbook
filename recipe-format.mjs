const plain = text => text.replace(/\*|\x60/g, '').replace(/<br\s*\/?>/gi, ' ').trim();
const textLine = text => plain(text).replace(/（\s*\[[\d:]+\](?:[–－-]\[[\d:]+\])*\s*）/g, '');

// Arrows inside a bracket describe a single program (or a menu path).
export function readStages(mode) {
  const parts = [];
  let segment = '', depth = 0;
  for (const ch of mode.replace(/<br\s*\/?>/gi, '➔')) {
    if ('（('.includes(ch)) depth++;
    if ('）)'.includes(ch)) depth = Math.max(0, depth - 1);
    if (!depth && '➔→'.includes(ch) && !/特殊行程\s*[`*]*\s*$/.test(segment)) {
      if (segment.trim()) parts.push(segment);
      segment = '';
    } else segment += ch;
  }
  if (segment.trim()) parts.push(segment);
  return parts.map(raw => {
    const description = plain(raw).replace(/^[①-⑨]\s*/, '');
    const quoted = Array.from(raw.matchAll(/`([^`]+)`/g), m => m[1])
      .filter(word => /[\p{L}]/u.test(word) && !/^特殊行程$/.test(word));
    const modeName = quoted[0] || description.split(/[（(]/)[0].trim() || description;
    const side = /左側/.test(description) ? 'left' : /右側/.test(description) ? 'right'
      : /爆炒|舒肥|收汁|醬燒|烘烤|慢燉|自訂行程|DIY/i.test(modeName) ? 'left'
      : /增壓|快煮米飯|煮粥|煲仔|牛[肉／/]*羊|豬[／/]雞|雞[／/]鴨|壓力烹調|蒸[煮／/]|煲湯|燉煮?湯品|煮[／/]燉湯品|鮑魚/.test(modeName) ? 'right' : undefined;
    const times = [...new Set(description.match(/\d+(?:[–～~-]\d+)?\s*(?:分鐘|小時|秒鐘)/g) ?? [])];
    // Use standalone lid instructions only. Narrative may describe another mode or a later release.
    const lidFields = description.split(/[（），、；＋()]/).map(value => value.trim());
    const lids = lidFields.flatMap(value => {
      if (/^(?:全程)?開蓋$/.test(value)) return ['open'];
      if (/^(?:蓋上|關蓋|蓋蓋)?不鎖(?:定|緊)?$/.test(value)) return ['closed_unlocked'];
      if (/^(?:鎖蓋|鎖蓋增壓|鎖緊上蓋|順時鐘鎖定上蓋)$/.test(value)) return ['locked'];
      return [];
    });
    const conditional = /或|若|選配|二擇一/.test(description);
    return { modeName, side, description,
      lid: !conditional && new Set(lids).size === 1 ? lids[0] : undefined,
      durationText: !conditional && times.length === 1 ? times[0] : undefined };

  });
}

function numeric(text) {
  return text.split(/\s+/).reduce((total, part) => {
    const [top, bottom = '1'] = part.split('/');
    return total + Number(top) / Number(bottom);
  }, 0);
}

function ingredient(name, qty, group, note = '') {
  const text = plain(qty);
  const [quantity] = text.split(/[（(]/);
  const match = quantity.trim().match(/^(\d+(?:\s+\d+\/\d+|\/\d+|\.\d+)?)\s*([a-zA-Z毫公克斤兩匙杯顆片支隻根條個把盒塊瓣碗包茶大湯小粒張朵捆罐]+)$/);
  return { name: plain(name), group, amount: match ? numeric(match[1]) : null,
    unit: match ? match[2] : quantity.trim(), originalQuantity: quantity.trim(),
    note: [text.slice(quantity.length), note].filter(Boolean).join(' ') };
}

function splitIngredient(text) {
  let depth = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if ('（('.includes(ch)) depth++;
    if ('）)'.includes(ch)) depth--;
    if (depth === 0 && '：:'.includes(ch)) return [text.slice(0, i), text.slice(i + 1)];
  }
  return [text, ''];
}

function readIngredients(block) {
  const result = [];
  let group = 'main', variant = '', headers = [];
  for (const line of block.split('\n')) {
    if (line.startsWith('### ')) {
      group = /^### (調味|搭配|醃料|滷汁|湯底|綜合調味|麻辣滷汁)/.test(line) ? 'seasoning' : 'main';
      variant = '';
    } else if (line.startsWith('#### ')) {
      variant = plain(line.slice(5)).split('（')[0];
    } else if (line.startsWith('|')) {
      const cells = line.trim().slice(1,-1).split('|').map(plain);
      if (/^(食材|項目)/.test(cells[0])) { headers = cells; continue; }
      if (!headers.length || /^[-:]+$/.test(cells[0])) continue;
      const mapped = headers[1]?.includes('2 人份');
      if (/模式|時間$/.test(cells[0])) continue;
      const rowGroup = /^(鹽|糖|黑胡椒|白胡椒|醬油|清水|開水|食用油|橄欖油|香油|奶油|白酒|米酒|味醂|番茄醬|砂糖)/.test(cells[0]) ? 'seasoning' : group;
      const row = ingredient(cells[0], cells[mapped ? 2 : 1], rowGroup, cells.length > 2 ? cells.at(-1) : '');
      if (mapped) row.byServings = { 2: cells[1], 4: cells[2], 6: cells[3] };
      result.push(row);
    } else if (/^\s*- /.test(line)) {
      const [name, qty] = splitIngredient(plain(line.replace(/^\s*- /, '')));
      result.push(ingredient(name, qty, group, variant));
    }
  }
  return result;
}

function readSteps(block) {
  const steps = [];
  let section = '', current;
  for (const line of block.split('\n')) {
    if (line.startsWith('### ')) { section = textLine(line.slice(4)).split('（')[0]; current = undefined; }
    else if (/^\d+\. /.test(line)) {
      const entry = line.replace(/^\d+\. /, '');
      const heading = entry.match(/^\*\*(.+?)\*\*/);
      const title = heading ? textLine(heading[1]) : textLine(entry).split(/[。，]/)[0];
      const instruction = heading ? textLine(entry.slice(heading[0].length)).replace(/^\s*[：:]\s*/, '') : textLine(entry).slice(title.length).replace(/^[。，]/, '');
      current = { title: section ? section + '・' + title : title, instruction, stepNumber: steps.length + 1 };
      steps.push(current);
    } else if (current && line.trim() && line.trim() !== '---') {
      current.instruction += (current.instruction ? '\n' : '') + textLine(line.trim().replace(/^- /, ''));
    }
  }
  return steps;
}

export function readBody(source, stages) {
  const sections = source.split(/^## [一二三四五]、[^\n]*\n/m);
  const [materials, preparation = ''] = sections[1].split(/^### 前置備料與器具準備[^\n]*\n/m);
  const ingredients = readIngredients(materials);
  const prepSteps = readSteps(preparation);
  const cookingStart = prepSteps.length;
  const steps = [...prepSteps, ...readSteps(sections[2])];
  // Attach a program to the step that actually selects it; later mentions can be reminders.
  let previous = -1;
  for (const stage of stages) {
    const index = steps.findIndex((step, i) => i > previous &&
      (step.title + step.instruction).includes(stage.modeName) &&
      /選|設定|按|啟動|切換/.test(step.title + step.instruction) && i >= cookingStart);
    if (index >= 0) {
      steps[index].panelStage = stage;
      previous = index;
    }
  }
  const tips = (sections[4] ?? sections[3]).split('\n')
    .filter(line => /^\s*- /.test(line)).map(line => textLine(line.replace(/^\s*- (?:\d+\. )?/, '')))
    .filter(line => !/[：:]$/.test(line));
  const servings = source.match(/^\| (?:官方份量|份量基準) \| (\d+)\s*人份/m)
    ?? materials.match(/^### [^\n]*?[（(](?:約\s*)?(\d+)\s*人份/m);
  const sourceField = source.match(/^\| (?:官方來源|影片／食譜來源|影片來源|食譜來源) \| (.+)/m)?.[1] ?? '';
  return { ingredients, steps: steps.map((s, i) => ({ ...s, stepNumber: i + 1 })),
    baseServings: ingredients.some(i => i.byServings) ? 4 : servings ? Number(servings[1]) : null,
    stoveDifference: tips.at(-2) ?? tips[0], avoidPitfall: tips.at(-1),
    sourceUrl: sourceField.match(/\]\((https?:\/\/[^)]+)\)/)?.[1] };
}
