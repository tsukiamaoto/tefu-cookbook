import { useEffect, useState } from 'react';
import { useWakeLock } from '../../hooks/useWakeLock';
import type { Recipe } from '../../types/recipe';
import {
  formatMeasurements,
  buildYoutubeSearchUrl,
  formatMinutesText,
} from '../../utils/formatters';
import { ArrowLeftIcon, ClockIcon, PlayIcon, SunIcon } from '../Icons';
import { IngredientPanel } from './IngredientPanel';
import { PotSequenceStrip } from './PotSequenceStrip';
import { StepList } from './StepList';

import type { DocumentRecipe, DocumentBody } from '../../data/recipes/documents';

interface RecipeSheetViewProps {
  recipe: Recipe | (DocumentRecipe & DocumentBody);
  onBack: () => void;
}

export function RecipeSheetView({ recipe, onBack }: RecipeSheetViewProps) {
  const { isAwake } = useWakeLock(true);
  const [servings, setServings] = useState<number>(
    recipe.baseServings ?? 4
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [recipe.id]);

  return (
    <main className="app-shell">
      <header className="sheet-topbar">
        <div className="sheet-topbar-left">
          <button type="button" className="back-btn" onClick={onBack}>
            <ArrowLeftIcon size={22} />
            回食譜列表
          </button>
          <div className="sheet-title-wrap">
            <h1 className="sheet-title">{recipe.title}</h1>
            <span className="cuisine-badge">{recipe.cuisine}</span>
          </div>
        </div>

        <div className="sheet-topbar-meta">
          {'duration' in recipe ? ((recipe.time || recipe.duration) && <span className="dual-time-inline"><ClockIcon size={18} />{recipe.time || '官方標示 ' + recipe.duration}</span>) : <span className="dual-time-inline tabular-nums">
            <ClockIcon size={18} />
            設 {formatMinutesText(recipe.settingMinutes)}・開飯約{' '}
            {formatMinutesText(recipe.realTotalMinutes)}
          </span>}
          {'innerPot' in recipe && <span className="cuisine-badge">{recipe.innerPot}</span>}
          {isAwake && (
            <span className="awake-badge" role="status">
              <SunIcon size={18} />
              螢幕不暗
            </span>
          )}
        </div>
      </header>

      <PotSequenceStrip recipe={recipe} />

      <div className="sheet-body">
        <IngredientPanel
          ingredients={recipe.ingredients}
          baseServings={recipe.baseServings}
          targetServings={servings}
          onChangeServings={setServings}
        />

        <section className="sheet-card" aria-label="完整步驟一次看完">
          <div className="section-header">
            <h2 className="section-title">完整步驟</h2>
          </div>

          <StepList steps={recipe.steps} />

          <div className="sheet-notes-stack">
            {recipe.stoveDifference && <div className="stove-callout">
              <span className="stove-callout-title">老鳥轉鍋重點：</span>
              <span>{formatMeasurements(recipe.stoveDifference)}</span>
            </div>}

            {recipe.avoidPitfall && (
              <div className="pitfall-callout" role="note">
                避坑提醒：{formatMeasurements(recipe.avoidPitfall)}
              </div>
            )}
          </div>

          <div className="sheet-utilities">
            {('youtubeQuery' in recipe || recipe.sourceUrl) && <a
              href={recipe.sourceUrl || ('youtubeQuery' in recipe ? buildYoutubeSearchUrl(recipe.youtubeQuery) : undefined)}
              target="_blank"
              rel="noopener noreferrer"
              className="utility-btn utility-btn--youtube"
            >
              <PlayIcon size={20} />
              {!recipe.sourceUrl || recipe.sourceUrl.includes('youtube.com')
                ? '觀看實作影片'
                : /tefal|t-fal/i.test(recipe.sourceUrl)
                  ? '查看官方食譜'
                  : '參考家常食譜'}
            </a>}
          </div>
          {'referenceHtml' in recipe && <details className="recipe-document"><summary>完整來源與補充說明</summary><div dangerouslySetInnerHTML={{ __html: recipe.referenceHtml }} /></details>}
        </section>
      </div>
    </main>
  );
}
