import { readFile } from 'node:fs/promises';
import { readStages, readBody } from './recipe-format.mjs';
import MarkdownIt from 'markdown-it';

// Only repository-authored recipe documents are compiled.
const markdown = new MarkdownIt({ html: true });

function removeVideoTimecodes(source) {
  // Cooking durations on the appliance display (e.g. `01:00`) are not footage citations.
  const stamp = /`?\[(?:[^\[\]\n|]*?\s+)?\d{1,2}(?::\d{2}){1,2}\]`?/.source;
  const citations = new RegExp(`${stamp}(?:[ \\t]*[、，,–—－～~至-][ \\t]*${stamp})*`, 'g');
  return source
    .replace(/^\| 時間軸 \|[^\n]*(?:\n\|[^\n]*)+/gm, table =>
      table.split('\n').map(row => row.replace(/^\|[^|]*\|/, '|')).join('\n'))
    .replace(citations, '')
    .replace(/(?:如|像)畫面[ \t]+(?:所示|示範|提醒|一樣|般)?[ \t]*，?/g, '')
    .replace(/畫面[ \t]+(?=使用|將|加入|切|去皮|洗淨|開蓋|取出|以量杯|起鍋|最後|倒入|呈|約|僅取)/g, '')
    .replace(/（(?:[\w-]{11}[ \t]+實拍|過程畫面|壓字|畫面(?:清單壓字確認|實看亮點|實看發現|亮點|擺盤實拍))）/g, '')
    // Some sources cite both versions of a video in one note. Remove the
    // citation labels together, keeping any actual preparation advice.
    .replace(/（(?:[ \t]*(?:主參|輔參|主片|輔片)[ \t]*[；、，／]?)+）/g, '')
    .replace(/如(?:主參|輔參)[ \t]+畫面所示[，、]?/g, '')
    .replace(/（(?:依)?(?:畫面|主參|輔參|面板)?[ \t]*(?:關鍵實拍|實拍(?:重點|手法)?|壓字(?:重點|核對一致|確認|補齊)|字幕補齊|實證|實拍補充)[！!]?）/g, '')
    .replace(/(?:[，；][ \t]*)?(?:畫面|主參|輔參)[ \t]+(?:實拍|壓字確認)[ \t]*(?=）)/g, '')
    .replace(/(?:畫面|主參|輔參)[ \t]+(?:實拍為|實拍|壓字確認)[ \t]*/g, '')
    .replace(/（[ \t]*[；、，]+[ \t]*/g, '（')
    .replace(/(?:畫面|原片|影片)[ \t]+(?:顯示|可見|可以看到|實拍確認)[ \t]*/g, '')
    .replace(/（[ \t]*(?:畫面[ \t]*)?(?:壓字核對一致|實拍確認)[ \t]*）/g, '')
    .replace(/([，、])[ \t]*）/g, '）')
    .replace(/（[ \t]*(?:畫面|原片|影片|實拍|段落)?[ \t]*）/g, '')
    .replace(/（[ \t]*[，、][ \t]*/g, '（')
    .replace(/（[ \t]+/g, '（')
    .replace(/(畫面|主參|輔參|原片)[ \t]{2,}/g, '$1');
}

function field(source, name) {
  return source.match(new RegExp('^\\| ' + name + ' \\| (.*) \\|\\r?$', 'm'))?.[1] ?? '';
}

function cuisineFor(region) {
  const countries = [
    [/中亞/, '中亞'], [/^香港.*(?:泰式|印尼)/, '南洋'],
    [/^香港|^港式|^粵菜/, '港式'], [/台灣|^川台/, '台式'],
    [/^日本|日式拉麵|韓日.*日/, '日式'], [/^韓國|韓式家常料理/, '韓式'],
    [/泰國|印尼|馬來西亞|新加坡|菲律賓|越南/, '南洋'],
  ];
  const cuisine = countries.find(([pattern]) => pattern.test(region));
  if (!cuisine) throw new Error('Unrecognized Asian cuisine: ' + region);
  return cuisine[1];
}

function categoryFor(shortTitle, fullTitle, mode) {
  if (/舒肥|低溫調理|真空低溫慢煮/.test(fullTitle)) return 'sousvide';
  if (/綠豆湯|紅豆湯|薏仁湯|花生湯|銀耳蓮子湯|地瓜薑湯|紅豆紫米|甜湯/.test(fullTitle)) return 'dessert';
  if (/蒸布丁|蒸巧克力|清蒸|蒸鮮魚|一飯兩菜|上蒸下煮|紙包魚|甜薯蓉|地瓜泥/.test(shortTitle)) return 'steam';
  if (/蛋糕|烤雞|無水燒雞|烘蛋/.test(shortTitle)) return 'bake';
  if (/湯飯|粥|飯|冬粉|米粉|牛肉粉|肉粽|一鍋奶油培根義大利麵/.test(shortTitle)) return 'rice';
  if (/湯|佛跳牆|薑母鴨/.test(shortTitle)) return 'soup';
  if ((/^蒸／一鍋兩菜/.test(mode) || /奶油玉米/.test(shortTitle)) && !/燉|滷|炒/.test(shortTitle)) return 'steam';
  return 'braise';
}

export function recipeDocuments() {
  return {
    name: 'recipe-documents',
    enforce: 'pre',
    async load(id) {
      const match = id.match(/^(.*\/docs\/spec\/recipes\/([^/]+)\/(\d+[^/]+)\.md)\?(recipe-info|recipe-body)$/);
      if (!match) return;
      const [, file, folder, slug, request] = match;
      this.addWatchFile(file);
      const source = removeVideoTimecodes((await readFile(file, 'utf8')).replace(/^\uFEFF/, ''));
      const [heading, ...lines] = source.split(/\r?\n/);
      if (!heading.startsWith('# ')) throw new Error('Missing recipe title in ' + file);
      const stages = readStages(field(source, '完整行程串接') || field(source, 'CY625870 建議模式'));
      if (request === 'recipe-body') {
        return 'export default ' + JSON.stringify({ ...readBody(source, stages), referenceHtml: markdown.render(lines.join('\n')) });
      }
      const fullTitle = heading.slice(2).trim();
      const title = fullTitle.split('（')[0];
      const region = field(source, '國家／菜系');
      const mode = field(source, '官方主打模式') || field(source, 'CY625870 建議模式');
      const sourceName = folder === 'official-tw'
        ? '台灣官方食譜手冊'
        : field(source, '頻道名稱')
          || field(source, '聯名主廚／品牌')
          || (/t-fal\.co\.jp/.test(source) ? '日本 T-fal 官方食譜' : '');
      const introRaw = source.match(/^> \*\*官方料理簡介\*\*：(.+)/m)?.[1]?.trim() ?? '';
      const intro = introRaw.match(/^[^。！!\n]+(?:[。！!][」』”]|(?<=^.{0,8})[。！!][^。！!\n]+)?/)?.[0] ?? '';
      const subtitle = intro || fullTitle.slice(title.length).replace(/^（|）$/g, '') || sourceName;
      const prep = source.split(/^## 一、/m)[1]?.split(/^## 二、|^### 前置/m)[0] ?? '';
      const ingredients = prep.split('\n').flatMap(line => {
        const item = line.match(/^\s*-\s+([^：:（(]+)|^\|\s*([^|]+)\|/);
        return item ? [(item[1] ?? item[2]).replace(/\*+/g, '').trim()] : [];
      });
      const time = field(source, '預估總耗時').replace(/[`*]/g, '').split('（')[0];
      const info = {
        stages, time,
        id: 'spec-' + folder + '-' + slug, title, subtitle, cuisine: cuisineFor(region),
        category: categoryFor(title, fullTitle, mode), duration: field(source, '官方標示時間'),
        searchText: [fullTitle, region, mode, subtitle, sourceName, ...ingredients].join(' ').toLowerCase(),
      };
      return 'export default ' + JSON.stringify(info);
    },
  };
}
