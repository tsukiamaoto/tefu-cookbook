import type { CuisineType, RecipeCategory, PanelStage, Ingredient, RecipeStep } from '../../types/recipe';

export interface DocumentBody {
  ingredients: Ingredient[];
  steps: RecipeStep[];
  baseServings: number | null;
  stoveDifference?: string;
  avoidPitfall?: string;
  sourceUrl?: string;
  referenceHtml: string;
}

interface DocumentInfo {
  id: string;
  title: string;
  subtitle: string;
  cuisine: CuisineType;
  category: RecipeCategory;
  duration: string;
  time: string;
  stages: PanelStage[];
  searchText: string;
}

export interface DocumentRecipe extends DocumentInfo {
  loadBody: () => Promise<DocumentBody>;
}

const summaries = import.meta.glob<DocumentInfo>([
  '../../../docs/spec/recipes/*/[0-9]*.md',
  '!**/*-cleaning-guide.md',
  '!**/{australia-italy,france,spain}/*.md',
  '!**/russia/0[12]-*.md',
  '!**/official-tw/{01,02,05,06,07,08,09,26,27,28,29,32,33,34}-*.md',
  '!**/official/{01,05,09,14,15,22}-*.md',
  '!**/japan/05-*.md',
  '!**/korea/0[78]-*.md',
  '!**/ytower-tefal/{02,03,05,16,17,25}-*.md',
], {
  query: '?recipe-info', import: 'default', eager: true,
});
const bodies = import.meta.glob<DocumentBody>([
  '../../../docs/spec/recipes/*/[0-9]*.md',
  '!**/*-cleaning-guide.md',
  '!**/{australia-italy,france,spain}/*.md',
  '!**/russia/0[12]-*.md',
  '!**/official-tw/{01,02,05,06,07,08,09,26,27,28,29,32,33,34}-*.md',
  '!**/official/{01,05,09,14,15,22}-*.md',
  '!**/japan/05-*.md',
  '!**/korea/0[78]-*.md',
  '!**/ytower-tefal/{02,03,05,16,17,25}-*.md',
], {
  query: '?recipe-body', import: 'default',
});

export const DOCUMENT_RECIPES: DocumentRecipe[] = Object.entries(summaries).map(([path, info]) => ({
  ...info, loadBody: bodies[path],
}));
