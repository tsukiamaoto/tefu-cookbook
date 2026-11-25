import { useMemo } from 'react';
import {
  type CatalogRecipe,
  CATEGORY_OPTIONS,
  CUISINE_OPTIONS,
  filterRecipes,
} from '../../data/recipes';
import type { CuisineType, RecipeCategory } from '../../types/recipe';
import { SearchIcon } from '../Icons';
import { RecipeCard } from './RecipeCard';

interface HomeViewProps {
  stars: ReadonlySet<string>;
  onToggleStar: (id: string) => void;
  recipes: CatalogRecipe[];
  query: string;
  category: RecipeCategory | 'all';
  cuisine: CuisineType | '全部';
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: RecipeCategory | 'all') => void;
  onCuisineChange: (value: CuisineType | '全部') => void;
  onResetFilters: () => void;
  onSelectRecipe: (recipeId: string) => void;
}

export function HomeView({
  stars,
  onToggleStar,
  recipes,
  query,
  category,
  cuisine,
  onQueryChange,
  onCategoryChange,
  onCuisineChange,
  onResetFilters,
  onSelectRecipe,
}: HomeViewProps) {
  const filtered = useMemo(
    () => filterRecipes(recipes, { query, category, cuisine }).sort(
      (a, b) => Number(stars.has(b.id)) - Number(stars.has(a.id))
    ),
    [recipes, query, category, cuisine, stars]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: recipes.length };
    for (const r of recipes) {
      counts[r.category] = (counts[r.category] ?? 0) + 1;
    }
    return counts;
  }, [recipes]);

  const hasActiveFilter =
    query.trim().length > 0 || category !== 'all' || cuisine !== '全部';

  return (
    <main className="app-shell">
      <section className="filter-panel" aria-label="搜尋與篩選食譜">
        <div className="search-row">
          <div className="search-input-wrap">
            <span className="search-icon">
              <SearchIcon size={24} />
            </span>
            <input
              type="search"
              className="search-input"
              aria-label="搜尋菜名、食材或萬用鍋按鍵"
              placeholder="搜尋菜名、食材或按鍵（例：雞腿、牛肉、紅豆、舒肥）"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
            />
          </div>
          {query.trim().length > 0 && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => onQueryChange('')}
            >
              ✕ 清除
            </button>
          )}
        </div>

        <div className="filter-group" role="group" aria-label="料理分類">
          <span className="filter-group-label">分類</span>
          {CATEGORY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className="filter-pill"
              aria-pressed={category === opt.id}
              onClick={() => onCategoryChange(opt.id)}
            >
              <span>{opt.label}</span>
              <span className="filter-pill-count tabular-nums">
                {categoryCounts[opt.id] ?? 0}
              </span>
            </button>
          ))}
        </div>

        <div className="filter-group" role="group" aria-label="料理風味">
          <span className="filter-group-label">風味</span>
          {CUISINE_OPTIONS.map((item) => (
            <button
              key={item}
              type="button"
              className="filter-pill filter-pill--cuisine"
              aria-pressed={cuisine === item}
              onClick={() => onCuisineChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <div className="results-summary" role="status" aria-live="polite">
        <span className="tabular-nums">
          共顯示 {filtered.length} 道萬用鍋食譜
        </span>
        {hasActiveFilter && (
          <button
            type="button"
            className="reset-filters-btn"
            onClick={onResetFilters}
          >
            顯示全部食譜
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state" role="status">
          <h2>找不到符合的食譜</h2>
          <p>試試看換個關鍵字（例如「雞腿」「排骨」「舒肥」），或先看全部菜色。</p>
          <button
            type="button"
            className="empty-state-btn"
            onClick={onResetFilters}
          >
            回到全部食譜
          </button>
        </div>
      ) : (
        <section className="recipe-grid" aria-label="食譜列表">
          {filtered.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              starred={stars.has(recipe.id)}
              onToggleStar={onToggleStar}
              onSelect={onSelectRecipe}
            />
          ))}
        </section>
      )}
    </main>
  );
}
