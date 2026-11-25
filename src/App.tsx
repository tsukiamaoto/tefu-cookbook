import { useCallback, useEffect, useMemo, useState } from 'react';
import { HomeView } from './components/HomeView/HomeView';
import { RecipeSheetView } from './components/RecipeSheetView/RecipeSheetView';
import { DocumentSheet } from './components/RecipeSheetView/DocumentSheet';
import { RECIPE_ALIASES } from './data/recipes/duplicates';
import { ALL_RECIPES } from './data/recipes';
import { useHomeScrollMemory } from './hooks/useHomeScrollMemory';
import type { CuisineType, RecipeCategory } from './types/recipe';

const STAR_STORAGE_KEY = 'tefu-cookbook.starred-recipes';

function readStars(): Set<string> {
  try {
    const ids = JSON.parse(localStorage.getItem(STAR_STORAGE_KEY) ?? '[]');
    return new Set(Array.isArray(ids) ? ids.filter(id => typeof id === 'string') : []);
  } catch {
    return new Set();
  }
}

function readRecipeIdFromHash(): string | null {
  const hash = window.location.hash;
  if (hash.startsWith('#recipe/')) {
    return decodeURIComponent(hash.slice('#recipe/'.length));
  }
  return null;
}

export function App() {
  const [stars, setStars] = useState(readStars);

  function toggleStar(id: string) {
    const next = new Set(stars);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setStars(next);
    try {
      localStorage.setItem(STAR_STORAGE_KEY, JSON.stringify([...next]));
    } catch {
      // Keep stars usable for this visit when browser storage is unavailable.
    }
  }
  const [selectedId, setSelectedId] = useState<string | null>(() =>
    readRecipeIdFromHash()
  );
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<RecipeCategory | 'all'>('all');
  const [cuisine, setCuisine] = useState<CuisineType | '全部'>('全部');

  useEffect(() => {
    const syncFromHash = () => {
      setSelectedId(readRecipeIdFromHash());
    };
    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);
    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, []);

  const selectedRecipe = useMemo(
    () => ALL_RECIPES.find((r) => r.id === (RECIPE_ALIASES.get(selectedId ?? '') ?? selectedId)) ?? null,
    [selectedId]
  );

  const { captureHomeScroll } = useHomeScrollMemory(!selectedRecipe);

  const handleSelectRecipe = useCallback((recipeId: string) => {
    captureHomeScroll();
    setSelectedId(recipeId);
    window.location.hash = `#recipe/${encodeURIComponent(recipeId)}`;
  }, [captureHomeScroll]);

  const handleBackHome = useCallback(() => {
    setSelectedId(null);
    if (window.location.hash) {
      window.history.pushState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
  }, []);

  const handleResetFilters = useCallback(() => {
    setQuery('');
    setCategory('all');
    setCuisine('全部');
  }, []);

  if (selectedRecipe && 'loadBody' in selectedRecipe) {
    return <DocumentSheet key={selectedRecipe.id} recipe={selectedRecipe} onBack={handleBackHome} />;
  }
  return selectedRecipe ? (
    <RecipeSheetView recipe={selectedRecipe} onBack={handleBackHome} />
  ) : (
    <HomeView
      stars={stars}
      onToggleStar={toggleStar}
      recipes={ALL_RECIPES}
      query={query}
      category={category}
      cuisine={cuisine}
      onQueryChange={setQuery}
      onCategoryChange={setCategory}
      onCuisineChange={setCuisine}
      onResetFilters={handleResetFilters}
      onSelectRecipe={handleSelectRecipe}
    />
  );
}
