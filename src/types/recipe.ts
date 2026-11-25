export type RecipeCategory = 'braise' | 'soup' | 'rice' | 'dessert' | 'steam' | 'sousvide' | 'bake';

export type CuisineType = '台式' | '日式' | '韓式' | '南洋' | '港式' | '中亞' | '印度';

export type PotSide = 'left' | 'right';

export type LidState = 'open' | 'closed_unlocked' | 'locked';

export type ReleaseMode = 'natural_auto' | 'quick_manual' | 'none';

export type InnerPotRecommendation =
  | '球釜不沾內鍋'
  | '304不鏽鋼內鍋優先'
  | '雙內鍋皆可';

export interface PotAction {
  side: PotSide;
  modeName: string;
  lid: LidState;
  durationText: string;
  temperature?: string;
  releaseMode?: ReleaseMode;
  shortAction?: string;
}

export interface PanelStage extends Partial<PotAction> {
  modeName: string;
  description?: string;
}

export interface Ingredient {
  name: string;
  amount: number | null;
  unit: string;
  note?: string;
  originalQuantity?: string;
  byServings?: Record<number, string>;
  group: 'main' | 'seasoning';
}

export interface RecipeStep {
  stepNumber: number;
  title: string;
  instruction: string;
  potAction?: PotAction;
  panelStage?: PanelStage;
  tip?: string;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  category: RecipeCategory;
  cuisine: CuisineType;
  settingMinutes: number;
  realTotalMinutes: number;
  baseServings: number;
  innerPot: InnerPotRecommendation;
  releaseSummary: string;
  stoveDifference: string;
  avoidPitfall?: string;
  youtubeQuery: string;
  sourceUrl?: string;
  sourceTag?: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
}

export interface CategoryOption {
  id: RecipeCategory | 'all';
  label: string;
}
