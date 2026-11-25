import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { RecipeSheetView } from '../../components/RecipeSheetView/RecipeSheetView';
import { IngredientPanel } from '../../components/RecipeSheetView/IngredientPanel';
import { RECIPE_ALIASES } from './duplicates';
import { DOCUMENT_RECIPES } from './documents';
import { formatMeasurements } from '../../utils/formatters';
import { describe, expect, it } from 'vitest';
import {
  ALL_RECIPES,
  ORIGINAL_RECIPES,
  CATEGORY_OPTIONS,
  CUISINE_OPTIONS,
  filterRecipes,
  getRecipePotSequence,
} from './index';

describe('CY625870 recipe dataset integrity', () => {
  it('shows pinned roast chicken dishes first, followed by everyday Taiwanese dishes', () => {
    expect(ALL_RECIPES.slice(0, 3).map(recipe => recipe.id)).toEqual([
      'spec-official-tw-22-waterless-roast-chicken',
      'tw-thirteen-spice-roast-chicken',
      'spec-malaysia-singapore-02-ayam-panggang',
    ]);
    const dishes = filterRecipes(ALL_RECIPES, { query: '', cuisine: '台式', category: 'all' });
    expect(dishes.slice(0, 5).map(recipe => recipe.id)).toEqual([
      'spec-official-tw-22-waterless-roast-chicken',
      'tw-thirteen-spice-roast-chicken',
      'spec-taiwan-home-01-mung-bean-soup',
      'spec-ytower-tefal-15-egg-and-shrimp-fried-rice',
      'tw-minced-pork-sauce',
    ]);
  });

  it('lists Asian cuisines and unique catalog IDs', () => {
    expect(CUISINE_OPTIONS).toEqual(['全部', '台式', '港式', '日式', '韓式', '中亞', '南洋', '印度']);
    const unpinned = ALL_RECIPES.slice(3);
    const groups = unpinned.filter((recipe, i) => recipe.cuisine !== unpinned[i - 1]?.cuisine);
    expect(groups.map(recipe => recipe.cuisine)).toEqual(CUISINE_OPTIONS.slice(1));
    expect(ALL_RECIPES.some(r => r.title.includes('羊肉香料手抓飯'))).toBe(true);
    expect(ALL_RECIPES.some(r => /青醬鮭魚|法式洋蔥|培根義大利麵|古典巧克力蛋糕/.test(r.title))).toBe(false);
    const ids = new Set(ALL_RECIPES.map((r) => r.id));
    expect(ids.size).toBe(ALL_RECIPES.length);
  });

  it('resolves every alternate edition and lists Rendang once', () => {
    const visible = new Set(ALL_RECIPES.map(r => r.id));
    const editions = [...DOCUMENT_RECIPES, ...ORIGINAL_RECIPES];
    for (const [alias, selected] of RECIPE_ALIASES) {
      expect(editions.some(r => r.id === alias), alias).toBe(true);
      expect(visible.has(alias)).toBe(false);
      expect(visible.has(selected)).toBe(true);
    }
    expect(filterRecipes(ALL_RECIPES, { query: '馬來巴東牛肉', category: 'all', cuisine: '全部' })
      .map(r => r.id)).toEqual(['spec-official-tw-35-beef-rendang']);
    expect(ALL_RECIPES.filter(r => r.title.includes('巴東牛肉'))).toHaveLength(1);
  });

  it('loads each document with its source, ingredients and numbered steps', async () => {
    for (const recipe of DOCUMENT_RECIPES) {
      const body = await recipe.loadBody();
      expect(body.ingredients.length, recipe.id).toBeGreaterThan(0);
      expect(body.steps.length, recipe.id).toBeGreaterThan(0);
      expect(recipe.stages.length, recipe.id).toBeGreaterThan(0);
      expect(body.sourceUrl, recipe.id).toMatch(/^https?:/);
      const html = body.referenceHtml;
      expect(JSON.stringify(body), recipe.id).not.toMatch(/\[[^\[\]\n|]{0,18}\d:\d{2}\]/);
      const cookingText = JSON.stringify([body.steps, body.ingredients, body.stoveDifference, body.avoidPitfall]);
      expect(cookingText, recipe.id).not.toMatch(/（[\s；，、]*）|（[；，、]|（(?:主參|輔參)[\s；，、]*(?:主參|輔參)?\s*）/);
      expect(html, recipe.id).not.toMatch(/(?:實看畫面|影片段落)\s*\d{1,2}:\d{2}/);
      expect(html, recipe.id).toMatch(/<a href="https?:/);
      expect(html, recipe.id).toContain('<table>');
      expect(html, recipe.id).toContain('<ol>');
    }
  });

  it('renders the shared cooking layout and preserves explicitly published serving quantities', async () => {
    const recipe = DOCUMENT_RECIPES.find(r => r.id === 'spec-korea-05-sogogi-muguk')!;
    const body = await recipe.loadBody();
    for (const sample of [ORIGINAL_RECIPES[0], { ...recipe, ...body }]) {
      const sheet = renderToStaticMarkup(createElement(RecipeSheetView, { recipe: sample, onBack() {} }));
      for (const section of ['pot-sequence-row', 'ingredient-column', 'steps-stack']) expect(sheet).toContain(section);
    }
    const panel = renderToStaticMarkup(createElement(IngredientPanel, {
      ingredients: body.ingredients, baseServings: body.baseServings, targetServings: 6, onChangeServings() {}
    }));
    expect(panel).toContain('400 公克');
    expect(panel).toContain('1.8 公升');
  });

  it('ensures every visible homepage recipe uses the full native format with pot actions, dual time, inner pot, and stove difference', () => {
    for (const recipe of ALL_RECIPES) {
      expect('loadBody' in recipe, recipe.id).toBe(false);
      if ('loadBody' in recipe) continue;
      expect(recipe.title.length, recipe.id).toBeGreaterThan(0);
      expect(recipe.settingMinutes, recipe.id).toBeGreaterThan(0);
      expect(recipe.realTotalMinutes, recipe.id).toBeGreaterThanOrEqual(recipe.settingMinutes);
      expect(recipe.baseServings, recipe.id).toBeGreaterThan(0);
      expect(recipe.innerPot.length, recipe.id).toBeGreaterThan(0);
      expect(recipe.releaseSummary.length, recipe.id).toBeGreaterThan(0);
      expect(recipe.stoveDifference.length, recipe.id).toBeGreaterThan(10);
      expect(recipe.ingredients.length, recipe.id).toBeGreaterThan(0);
      expect(recipe.steps.length, recipe.id).toBeGreaterThan(0);

      const potSteps = getRecipePotSequence(recipe);
      expect(potSteps.length, recipe.id).toBeGreaterThan(0);
    }

    const muguk = ALL_RECIPES.find((r) => r.id === 'spec-korea-05-sogogi-muguk');
    expect(muguk && !('loadBody' in muguk)).toBe(true);
    if (muguk && !('loadBody' in muguk)) {
      const panel = renderToStaticMarkup(createElement(IngredientPanel, {
        ingredients: muguk.ingredients, baseServings: muguk.baseServings, targetServings: 6, onChangeServings() {}
      }));
      expect(panel).toContain('400 公克');
      expect(panel).toContain('1.8 公升');
    }

    expect(
      filterRecipes(ALL_RECIPES, { query: '楊桃', category: 'all', cuisine: '全部' }).length
    ).toBeGreaterThanOrEqual(27);
  });

  it('covers every non-all category and every Asian cuisine option', () => {
    for (const cat of CATEGORY_OPTIONS) {
      if (cat.id === 'all') continue;
      const matches = filterRecipes(ALL_RECIPES, {
        query: '',
        category: cat.id,
        cuisine: '全部',
      });
      expect(matches.length).toBeGreaterThan(0);
    }

    for (const cui of CUISINE_OPTIONS) {
      if (cui === '全部') continue;
      const matches = filterRecipes(ALL_RECIPES, {
        query: '',
        category: 'all',
        cuisine: cui,
      });
      expect(matches.length).toBeGreaterThan(0);
    }
  });

  it('supports searching by dish title, ingredient, and CY625870 mode name', () => {
    expect(
      filterRecipes(ALL_RECIPES, { query: '三杯雞', category: 'all', cuisine: '全部' })
        .map((r) => r.id)
    ).toContain('spec-ytower-tefal-29-three-cup-chicken');

    expect(
      filterRecipes(ALL_RECIPES, { query: '紅豆', category: 'all', cuisine: '全部' })
        .map((r) => r.id)
    ).toContain('tw-redbean-purple-rice');

    expect(
      filterRecipes(ALL_RECIPES, { query: '舒肥料理', category: 'all', cuisine: '全部' }).length
    ).toBeGreaterThanOrEqual(5);

    expect(
      filterRecipes(ALL_RECIPES, { query: '', category: 'dessert', cuisine: '全部' })
        .map((r) => r.id)
    ).toEqual(expect.arrayContaining([
      'spec-taiwan-home-01-mung-bean-soup',
      'tw-redbean-purple-rice',
    ]));

    const mungBean = ALL_RECIPES.find((r) => r.id === 'spec-taiwan-home-01-mung-bean-soup');
    expect(mungBean && !('loadBody' in mungBean)).toBe(true);
    if (mungBean && !('loadBody' in mungBean)) {
      const sheet = renderToStaticMarkup(createElement(RecipeSheetView, { recipe: mungBean, onBack() {} }));
      expect(sheet).toContain('參考家常食譜');
    }

    expect(
      filterRecipes(ALL_RECIPES, { query: '烤雞', category: 'all', cuisine: '全部' })
        .map((r) => r.id)
    ).toEqual([
      'spec-official-tw-22-waterless-roast-chicken',
      'tw-thirteen-spice-roast-chicken',
      'spec-malaysia-singapore-02-ayam-panggang',
    ]);
  });

  it('normalizes every recipe cuisine, subtitle, sourceUrl, and key ytower categories', async () => {
    for (const recipe of ALL_RECIPES) {
      expect(recipe.subtitle.trim().length, recipe.id).toBeGreaterThan(0);
    }
    for (const recipe of DOCUMENT_RECIPES) {
      const body = await recipe.loadBody();
      expect(body.sourceUrl, recipe.id).toMatch(/^https?:\/\//);
    }
    const byId = new Map(ALL_RECIPES.map((r) => [r.id, r]));
    expect(byId.has('spec-ytower-tefal-03-sous-vide-pork-ribs')).toBe(false);
    expect(byId.has('spec-ytower-tefal-05-thick-preserved-radish-omelette')).toBe(false);
    expect(byId.has('spec-ytower-tefal-16-tomato-scrambled-eggs')).toBe(false);
    expect(byId.has('spec-ytower-tefal-17-stir-fried-water-spinach')).toBe(false);
    expect(byId.has('spec-ytower-tefal-25-green-pepper-shredded-pork')).toBe(false);
    expect(byId.get('spec-ytower-tefal-04-sous-vide-drunken-chicken')?.cuisine).toBe('台式');
    expect(byId.get('spec-ytower-tefal-14-mushroom-cured-meat-claypot-rice')?.cuisine).toBe('港式');
    expect(byId.get('spec-ytower-tefal-28-huadiao-chicken')?.cuisine).toBe('港式');
    expect(byId.get('spec-ytower-tefal-35-spicy-braised-beef-tendon')?.cuisine).toBe('台式');
    expect(byId.get('spec-ytower-tefal-06-thick-shrimp-omelette')?.category).toBe('bake');
    expect(byId.get('spec-ytower-tefal-09-one-pot-rice-pork-belly-sausage')?.category).toBe('steam');
    expect(byId.get('spec-ytower-tefal-13-steamed-black-bean-ribs-with-rice')?.category).toBe('steam');
    expect(byId.get('spec-ytower-tefal-26-ginger-duck')?.category).toBe('soup');
    expect(byId.get('spec-ytower-tefal-31-garlic-sliced-pork-belly')?.category).toBe('braise');
    expect(byId.get('spec-philippines-03-pork-binagoongan')?.category).toBe('braise');
  });

  it('keeps recipe titles and subtitles free of brand, official-source, and non-dish labels', () => {
    const nonDishTitlePattern = /T-?fal|Tefal|官方|原廠|實機|聯名|CY625|萬用鍋|壓力鍋|免舒肥機|一鍵|免顧火|免泡水|一鍋到底|無壓|°C|全程開蓋|黃金水米比|全雞／雞腿皆可/i;
    const nonDishSubtitlePattern = /T-?fal|Tefal|官方|原廠|實機版|聯名|CY625|輔參|主參|港版：|電子鍋實測|神級奇招|鮮呼吸|Home Chef|Smart Pro|Chef |Dr |ieatishootipost/i;
    for (const recipe of ALL_RECIPES) {
      expect(recipe.title, recipe.id).not.toMatch(nonDishTitlePattern);
      expect(recipe.subtitle, recipe.id).not.toMatch(nonDishSubtitlePattern);
    }
    expect(ALL_RECIPES.find((r) => r.id === 'spec-official-21-tfal-jp-waterless-chicken-curry')?.title).toBe('無水番茄雞肉咖哩');
  });

  it('renders every visible recipe field in Traditional Chinese without foreign-language leftovers', async () => {
    const foreignScript = /[\u3040-\u309F\u30A0-\u30FA\u30FC-\u30FF\uAC00-\uD7AF\u1100-\u11FF\u0E00-\u0E7F\u0400-\u04FF\u00C0-\u00D6\u00D8-\u024F\u1E00-\u1EFF]/;
    const allowedCode = /^(CY\d+[A-Z]*|tbsp|tsp|ml|mL|cc|kg|cm|mm|kPa|kpa|g|l|L|T|TS|t|ts)$/;

    for (const recipe of ALL_RECIPES) {
      const texts: string[] = [recipe.title, recipe.subtitle];
      if ('loadBody' in recipe) {
        const body = await recipe.loadBody();
        texts.push(
          recipe.time,
          recipe.duration,
          ...recipe.stages.flatMap((s) => [s.modeName, s.description ?? '']),
          ...body.ingredients.flatMap((i) => [i.name, i.originalQuantity ?? '', i.note ?? '']),
          ...body.steps.flatMap((s) => [s.title, s.instruction]),
          body.stoveDifference ?? '',
          body.avoidPitfall ?? '',
        );
      } else {
        texts.push(
          recipe.innerPot,
          recipe.releaseSummary,
          recipe.stoveDifference,
          recipe.avoidPitfall ?? '',
          ...recipe.ingredients.flatMap((i) => [i.name, i.note ?? '']),
          ...recipe.steps.flatMap((s) => [s.title, s.instruction, s.tip ?? '', s.potAction?.modeName ?? '', s.potAction?.shortAction ?? '']),
        );
      }

      for (const raw of texts) {
        if (!raw) continue;
        const formatted = formatMeasurements(raw);
        expect(formatted, `${recipe.id}: ${formatted}`).not.toMatch(foreignScript);
        expect(formatted, `${recipe.id}: ${formatted}`).not.toMatch(/星辰銀|極地白/);
        const strayLatin = [...formatted.matchAll(/[A-Za-z][A-Za-z0-9-]*/g)]
          .map((m) => m[0])
          .filter((w) => w.length >= 2 && !allowedCode.test(w));
        expect(strayLatin, `${recipe.id}: ${formatted}`).toEqual([]);
      }
    }
  });

  it('syncs every recipe page and category filter to exact Taiwan CY625870 panel buttons and valid ranges', () => {
    const TAIWAN_PANEL_SPECS: Record<
      string,
      { side: 'left' | 'right'; minMin: number; maxMin: number; tempMin?: number; tempMax?: number }
    > = {
      低溫慢燉: { side: 'left', minMin: 120, maxMin: 720, tempMin: 70, tempMax: 70 },
      高溫慢燉: { side: 'left', minMin: 120, maxMin: 720, tempMin: 90, tempMax: 90 },
      爆炒煎烤: { side: 'left', minMin: 1, maxMin: 59, tempMin: 150, tempMax: 150 },
      舒肥料理: { side: 'left', minMin: 10, maxMin: 1200, tempMin: 58, tempMax: 90 },
      烘烤: { side: 'left', minMin: 40, maxMin: 59, tempMin: 120, tempMax: 150 },
      '收汁／醬燒': { side: 'left', minMin: 1, maxMin: 15, tempMin: 110, tempMax: 110 },
      自訂行程: { side: 'left', minMin: 5, maxMin: 240, tempMin: 60, tempMax: 150 },
      快煮米飯: { side: 'right', minMin: 14, maxMin: 14 },
      '煮粥／煲仔飯': { side: 'right', minMin: 15, maxMin: 30 },
      '牛／羊': { side: 'right', minMin: 30, maxMin: 59 },
      '雞／鴨／豬': { side: 'right', minMin: 12, maxMin: 29 },
      '煮／燉湯品': { side: 'right', minMin: 20, maxMin: 59 },
      '蒸／一鍋兩菜': { side: 'right', minMin: 3, maxMin: 20 },
      燉鮑魚: { side: 'right', minMin: 325, maxMin: 595 },
    };

    const nonTaiwanButtonPattern =
      /豆類[／/]蹄筋|豆類模式|蹄筋模式|牛\s*[／/]\s*羊肉|牛肉\s*[／/]\s*羊肉|豬\s*[／/]\s*雞\s*[／/]\s*鴨|雞鴨豬|無壓烘烤|湯品\s*[／/]\s*(?:煲湯|雞鴨豬|牛羊肉|豆類)|燉煮湯品|煮粥\s*[／/]\s*稀飯|「(?:湯品|煲湯|白米|糙米|煲仔飯)」|(?:雞|牛|收汁|煮|蒸|煮粥)\s*\/\s*(?:鴨|羊|醬燒|燉湯品|一鍋兩菜|煲仔飯)|(?:雞|牛|收汁|煮|蒸|煮粥)\s+／\s+/;

    for (const cat of CATEGORY_OPTIONS) {
      expect(cat.label).not.toMatch(nonTaiwanButtonPattern);
    }

    const parseMinRange = (text: string): [number, number] | null => {
      const hourMin = text.match(/(\d+)\s*小時\s*(\d+)\s*分/);
      if (hourMin) {
        const total = Number(hourMin[1]) * 60 + Number(hourMin[2]);
        return [total, total];
      }
      const hours = text.match(/(\d+(?:\.\d+)?)(?:\s*[–～~-]\s*(\d+(?:\.\d+)?))?\s*小時/);
      if (hours) {
        const lo = Number(hours[1]) * 60;
        const hi = Number(hours[2] ?? hours[1]) * 60;
        return [lo, hi];
      }
      const mins = text.match(/(\d+)(?:\s*[–～~-]\s*(\d+))?\s*分鐘/);
      if (mins) {
        return [Number(mins[1]), Number(mins[2] ?? mins[1])];
      }
      return null;
    };

    for (const recipe of ALL_RECIPES) {
      if ('loadBody' in recipe) continue;

      const visibleTexts = [
        recipe.title,
        recipe.subtitle,
        recipe.stoveDifference,
        recipe.avoidPitfall ?? '',
        ...recipe.steps.flatMap((s) => [
          s.title,
          s.instruction,
          s.tip ?? '',
          s.potAction?.modeName ?? '',
          s.potAction?.durationText ?? '',
          s.potAction?.shortAction ?? '',
        ]),
      ];

      for (const text of visibleTexts) {
        expect(text, `${recipe.id}: ${text}`).not.toMatch(nonTaiwanButtonPattern);
      }

      for (const step of recipe.steps) {
        const action = step.potAction;
        if (!action) continue;

        const spec = TAIWAN_PANEL_SPECS[action.modeName];
        expect(spec, `${recipe.id} step ${step.stepNumber}: unknown mode "${action.modeName}"`).toBeDefined();
        expect(action.side, `${recipe.id} step ${step.stepNumber}`).toBe(spec.side);

        if (spec.side === 'right') {
          expect(action.lid, `${recipe.id} step ${step.stepNumber}`).toBe('locked');
          expect(action.temperature, `${recipe.id} step ${step.stepNumber}`).toBeUndefined();
        } else if (['低溫慢燉', '高溫慢燉', '舒肥料理', '烘烤'].includes(action.modeName)) {
          expect(action.lid, `${recipe.id} step ${step.stepNumber}`).toBe('closed_unlocked');
        } else if (['爆炒煎烤', '收汁／醬燒'].includes(action.modeName)) {
          expect(action.lid, `${recipe.id} step ${step.stepNumber}`).not.toBe('locked');
        }

        if (action.temperature && spec.tempMin !== undefined && spec.tempMax !== undefined) {
          const temps = [...action.temperature.matchAll(/(\d+)/g)].map((m) => Number(m[1]));
          for (const t of temps) {
            expect(t, `${recipe.id} step ${step.stepNumber} temp ${action.temperature}`).toBeGreaterThanOrEqual(spec.tempMin);
            expect(t, `${recipe.id} step ${step.stepNumber} temp ${action.temperature}`).toBeLessThanOrEqual(spec.tempMax);
          }
        }

        const isMidAddResume = /中途加料/.test(action.durationText) && /續/.test(action.durationText);
        if (!isMidAddResume) {
          const range = parseMinRange(action.durationText);
          if (range) {
            const [lo, hi] = range;
            expect(lo, `${recipe.id} step ${step.stepNumber}: ${action.modeName} ${action.durationText}`).toBeGreaterThanOrEqual(spec.minMin);
            expect(hi, `${recipe.id} step ${step.stepNumber}: ${action.modeName} ${action.durationText}`).toBeLessThanOrEqual(spec.maxMin);
          }
        }
      }
    }
  });
});
