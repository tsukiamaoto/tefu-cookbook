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
      'spec-ytower-tefal-16-tomato-scrambled-eggs',
      'spec-ytower-tefal-17-stir-fried-water-spinach',
      'spec-ytower-tefal-15-egg-and-shrimp-fried-rice',
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
    ).toBeGreaterThanOrEqual(30);
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
    expect(byId.get('spec-ytower-tefal-04-sous-vide-drunken-chicken')?.cuisine).toBe('台式');
    expect(byId.get('spec-ytower-tefal-14-mushroom-cured-meat-claypot-rice')?.cuisine).toBe('港式');
    expect(byId.get('spec-ytower-tefal-28-huadiao-chicken')?.cuisine).toBe('港式');
    expect(byId.get('spec-ytower-tefal-35-spicy-braised-beef-tendon')?.cuisine).toBe('台式');
    expect(byId.get('spec-ytower-tefal-05-thick-preserved-radish-omelette')?.category).toBe('bake');
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
});
