import type { CategoryOption, PanelStage, CuisineType, Recipe, RecipeCategory } from '../../types/recipe';
import { JAPANESE_RECIPES } from './japanese';
import { KOREAN_SEA_RECIPES } from './korean-sea';
import { TAIWANESE_RECIPES } from './taiwanese';
import { SPEC_YTOWER_A_RECIPES } from './spec-ytower-a';
import { SPEC_YTOWER_B_RECIPES } from './spec-ytower-b';
import { SPEC_OFFICIAL_TW_RECIPES } from './spec-official-tw';
import { SPEC_OFFICIAL_OVERSEAS_RECIPES } from './spec-official-overseas';
import { SPEC_TAIWAN_JAPAN_RECIPES } from './spec-taiwan-japan';
import { SPEC_KOREA_SEA_RECIPES } from './spec-korea-sea';

import { DOCUMENT_RECIPES, type DocumentRecipe } from './documents';
import { RECIPE_ALIASES } from './duplicates';

export type CatalogRecipe = Recipe | DocumentRecipe;

export const ORIGINAL_RECIPES: Recipe[] = [
  ...TAIWANESE_RECIPES,
  ...JAPANESE_RECIPES,
  ...KOREAN_SEA_RECIPES,
];

export const CURATED_SPEC_RECIPES: Recipe[] = [
  ...SPEC_YTOWER_A_RECIPES,
  ...SPEC_YTOWER_B_RECIPES,
  ...SPEC_OFFICIAL_TW_RECIPES,
  ...SPEC_OFFICIAL_OVERSEAS_RECIPES,
  ...SPEC_TAIWAN_JAPAN_RECIPES,
  ...SPEC_KOREA_SEA_RECIPES,
];

const curatedById = new Map(CURATED_SPEC_RECIPES.map((recipe) => [recipe.id, recipe]));
const editions: CatalogRecipe[] = [
  ...DOCUMENT_RECIPES.map((doc) => curatedById.get(doc.id) ?? doc),
  ...ORIGINAL_RECIPES,
];
const alternateTitles = new Map<string, string[]>();
for (const edition of editions) {
  const selected = RECIPE_ALIASES.get(edition.id);
  if (selected) {
    const titles = alternateTitles.get(selected) ?? [];
    titles.push(edition.title.toLowerCase());
    alternateTitles.set(selected, titles);
  }
}
export const CUISINE_OPTIONS: Array<CuisineType | '全部'> = [
  '全部', '台式', '港式', '日式', '韓式', '中亞', '南洋', '印度',
];

// Pinned roast chicken dishes displayed at the front of the home catalog.
const featuredOrder = [
  'spec-official-tw-22-waterless-roast-chicken',
  'tw-thirteen-spice-roast-chicken',
  'spec-malaysia-singapore-02-ayam-panggang',
];
const featuredRank = new Map(featuredOrder.map((id, rank) => [id, rank]));

// Editorial order for Taiwanese dishes, from everyday meals to special occasions.
const taiwaneseHomeCookingOrder = [
  'spec-ytower-tefal-16-tomato-scrambled-eggs',
  'spec-ytower-tefal-17-stir-fried-water-spinach',
  'spec-ytower-tefal-15-egg-and-shrimp-fried-rice',
  'spec-ytower-tefal-25-green-pepper-shredded-pork',
  'tw-minced-pork-sauce',
  'spec-ytower-tefal-05-thick-preserved-radish-omelette',
  'tw-two-dishes-egg-shrimp',
  'spec-ytower-tefal-18-mapo-tofu',
  'spec-ytower-tefal-29-three-cup-chicken',
  'spec-official-tw-16-soy-braised-pork',
  'spec-taiwan-01-potato-braised-pork',
  'spec-taiwan-03-garlic-vegetable-chicken-soup',
  'spec-ytower-tefal-20-scallion-beef',
  'spec-ytower-tefal-31-garlic-sliced-pork-belly',
  'spec-taiwan-02-salmon-tofu-miso-soup',
  'spec-ytower-tefal-01-auto-rendered-lard-and-cabbage',
  'asia-basic-rice-guide',
  'spec-ytower-tefal-32-pineapple-bitter-melon-chicken-soup',
  'tw-braised-pork-belly',
  'spec-ytower-tefal-34-braised-beef-brisket-radish',
  'spec-ytower-tefal-30-peeled-chili-steamed-fish',
  'tw-peeled-chili-chicken-soup',
  'spec-ytower-tefal-06-thick-shrimp-omelette',
  'spec-ytower-tefal-22-ants-climbing-a-tree',
  'spec-ytower-tefal-13-steamed-black-bean-ribs-with-rice',
  'spec-ytower-tefal-19-kung-pao-chicken',
  'spec-ytower-tefal-21-hakka-stir-fry',
  'tw-waterless-scallion-chicken',
  'spec-ytower-tefal-23-twice-cooked-pork',
  'tw-beef-noodle-soup',
  'spec-ytower-tefal-27-stir-fried-clams',
  'spec-official-tw-10-cola-pork-ribs',
  'spec-taiwan-07-lotus-root-quinoa-rib-soup',
  'tw-garlic-steamed-shrimp',
  'spec-official-tw-17-chestnut-braised-chicken',
  'spec-official-tw-12-braised-beef-shank',
  'spec-ytower-tefal-24-three-cup-squid',
  'spec-official-tw-19-taiwanese-butter-corn',
  'spec-ytower-tefal-09-one-pot-rice-pork-belly-sausage',
  'spec-ytower-tefal-10-one-pot-rice-salmon-chicken-thigh',
  'spec-ytower-tefal-11-one-pot-rice-radish-corn',
  'spec-ytower-tefal-12-one-pot-rice-sweet-potato-taro',
  'spec-official-tw-20-asian-fish-parcels',
  'spec-taiwan-04-aged-radish-chicken-soup',
  'tw-sishen-soup',
  'tw-braised-pork-trotters',
  'tw-sesame-oil-chicken',
  'spec-taiwan-09-seafood-taro-rice-noodles',
  'spec-official-tw-23-taiwanese-salt-baked-shrimp',
  'tw-redbean-purple-rice',
  'spec-official-tw-22-waterless-roast-chicken',
  'tw-thirteen-spice-roast-chicken',
  'spec-taiwan-05-dried-persimmon-chicken-soup',
  'spec-taiwan-06-black-bean-pork-trotter-soup',
  'tw-sticky-rice-chestnut',
  'spec-official-tw-11-oxtail-soup',
  'tw-sousvide-pork-collar',
  'spec-ytower-tefal-04-sous-vide-drunken-chicken',
  'tw-sponge-cake',
  'spec-ytower-tefal-07-one-pot-zongzi',
  'spec-ytower-tefal-26-ginger-duck',
  'spec-ytower-tefal-35-spicy-braised-beef-tendon',
  'spec-official-tw-13-dongpo-pork',
  'spec-official-tw-18-hakka-taro-braised-duck',
  'spec-official-tw-14-soy-glazed-lamb-ribs',
  'tw-chicken-essence',
  'spec-official-tw-21-chicken-broth-abalone-asparagus',
  'spec-official-tw-15-cantonese-buddha-jumps-over-the-wall',
  'spec-taiwan-08-fish-maw-scallop-abalone-chicken-soup',
];
const taiwaneseRank = new Map(taiwaneseHomeCookingOrder.map((id, rank) => [id, rank]));

export const ALL_RECIPES = editions
  .filter(recipe => !RECIPE_ALIASES.has(recipe.id))
  .sort((a, b) => {
    const aFeatured = featuredRank.get(a.id) ?? featuredRank.size;
    const bFeatured = featuredRank.get(b.id) ?? featuredRank.size;
    if (aFeatured !== bFeatured) return aFeatured - bFeatured;
    const cuisineOrder = CUISINE_OPTIONS.indexOf(a.cuisine) - CUISINE_OPTIONS.indexOf(b.cuisine);
    if (cuisineOrder || a.cuisine !== '台式') return cuisineOrder;
    const unranked = taiwaneseRank.size;
    return (taiwaneseRank.get(a.id) ?? unranked) - (taiwaneseRank.get(b.id) ?? unranked);
  });

export const CATEGORY_OPTIONS: CategoryOption[] = [
  { id: 'all', label: '全部' },
  { id: 'braise', label: '燉滷・主菜' },
  { id: 'soup', label: '煲湯・進補' },
  { id: 'rice', label: '飯・麵・粥・甜湯' },
  { id: 'steam', label: '蒸煮・兩菜' },
  { id: 'sousvide', label: '低溫舒肥' },
  { id: 'bake', label: '無壓烘烤' },
];

const CATEGORY_LABELS = new Map(
  CATEGORY_OPTIONS.filter((opt) => opt.id !== 'all').map((opt) => [opt.id, opt.label])
);

const SEARCH_TERM_SYNONYMS: Record<string, string[]> = {
  烤雞: ['烤雞', '烤半雞', '無水燒雞'],
  燒雞: ['燒雞', '烤雞', '烤半雞'],
};

export function filterRecipes(
  recipes: CatalogRecipe[],
  options: {
    query: string;
    category: RecipeCategory | 'all';
    cuisine: CuisineType | '全部';
  }
): CatalogRecipe[] {
  const q = options.query.trim().toLowerCase();
  const terms = q ? q.split(/\s+/) : [];

  return recipes.filter((recipe) => {
    if (options.category !== 'all' && recipe.category !== options.category) {
      return false;
    }
    if (options.cuisine !== '全部' && recipe.cuisine !== options.cuisine) {
      return false;
    }
    if (terms.length === 0 || alternateTitles.get(recipe.id)?.some((title) => title.includes(q))) {
      return true;
    }

    const categoryLabel = CATEGORY_LABELS.get(recipe.category) ?? '';
    const searchableText =
      'searchText' in recipe
        ? [
            recipe.searchText,
            recipe.cuisine,
            recipe.subtitle,
            categoryLabel,
            ...recipe.stages.map((s) => s.modeName),
          ]
            .join(' ')
            .toLowerCase()
        : [
            recipe.title,
            recipe.subtitle,
            recipe.cuisine,
            categoryLabel,
            recipe.innerPot,
            recipe.stoveDifference,
            recipe.sourceTag ?? '',
            ...recipe.ingredients.map((i) => i.name),
            ...recipe.steps.map((s) => s.potAction?.modeName ?? ''),
          ]
            .join(' ')
            .toLowerCase();

    return terms.every((term) => {
      const variants = SEARCH_TERM_SYNONYMS[term] ?? [term];
      return variants.some((v) => searchableText.includes(v));
    });
  });
}

export function getRecipePotSequence(recipe: Recipe | Pick<DocumentRecipe, 'stages'>): { stepNumber: number; action: PanelStage }[] {
  if ('stages' in recipe) return recipe.stages.map((action, index) => ({ stepNumber: index + 1, action }));
  return recipe.steps
    .filter((step) => Boolean(step.potAction))
    .map((step) => ({
      stepNumber: step.stepNumber,
      title: step.title,
      action: step.potAction!,
    }));
}
