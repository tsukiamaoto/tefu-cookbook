import { useEffect, useState } from 'react';
import type { DocumentRecipe, DocumentBody } from '../../data/recipes/documents';
import { RecipeSheetView } from './RecipeSheetView';
import { ArrowLeftIcon } from '../Icons';

export function DocumentSheet({ recipe, onBack }: { recipe: DocumentRecipe; onBack: () => void }) {

  const [body, setBody] = useState<DocumentBody | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    window.scrollTo(0, 0);
    setFailed(false);
    recipe.loadBody().then(
      (html) => { if (active) setBody(html); },
      () => { if (active) setFailed(true); }
    );
    return () => { active = false; };
  }, [recipe, attempt]);

  if (body) return <RecipeSheetView recipe={{ ...recipe, ...body }} onBack={onBack} />;
  return (
    <main className="app-shell">
      <header className="sheet-topbar">
        <div className="sheet-topbar-left">
          <button type="button" className="back-btn" onClick={onBack}>
            <ArrowLeftIcon size={22} />回食譜列表
          </button>
          <h1 className="sheet-title">{recipe.title}</h1>
          <span className="cuisine-badge">{recipe.cuisine}</span>
        </div>
      </header>
      {failed ? (
        <div role="alert">無法載入食譜。 <button onClick={() => setAttempt(attempt + 1)}>重新載入</button></div>
      ) : <p role="status">正在載入食譜…</p>}
    </main>
  );
}
