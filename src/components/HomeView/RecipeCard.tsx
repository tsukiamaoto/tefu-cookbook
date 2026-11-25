import { getRecipePotSequence, type CatalogRecipe } from '../../data/recipes';
import {
  formatMinutesText,
  getLidShortLabel,
  getSideShortLabel,
} from '../../utils/formatters';
import { ClockIcon, LidIcon } from '../Icons';

interface RecipeCardProps {
  starred: boolean;
  onToggleStar: (id: string) => void;
  recipe: CatalogRecipe;
  onSelect: (recipeId: string) => void;
}

export function RecipeCard({ recipe, onSelect, starred, onToggleStar }: RecipeCardProps) {
  const sequence = getRecipePotSequence(recipe);

  return (
    <article className="recipe-card">
      <div className="recipe-card-meta">
        <span className="cuisine-badge">{recipe.cuisine}</span>
        {'duration' in recipe ? ((recipe.time || recipe.duration) && <span className="dual-time-inline"><ClockIcon size={18} />{recipe.time || '官方標示 ' + recipe.duration}</span>) : <span className="dual-time-inline tabular-nums">
          <ClockIcon size={18} />
          設 {formatMinutesText(recipe.settingMinutes)}・開飯約{' '}
          {formatMinutesText(recipe.realTotalMinutes)}
        </span>}
      </div>

      <div className="recipe-title-row">
        <h2 className="recipe-card-title">
          <button type="button" className="recipe-open" onClick={() => onSelect(recipe.id)}
            aria-label={`查看食譜：${recipe.title}（${recipe.cuisine}）`}>
            {recipe.title}
          </button>
        </h2>
        <button type="button" className="recipe-star" aria-pressed={starred}
          aria-label={`星號標記：${recipe.title}`} title={starred ? '取消星號' : '加上星號，優先顯示'}
          onClick={() => onToggleStar(recipe.id)}>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"
            fill={starred ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
            <path d="m12 2.5 2.9 6 6.6 1-4.8 4.6 1.2 6.6-5.9-3.1-5.9 3.1 1.2-6.6L2.5 9.5l6.6-1z" />
          </svg>
        </button>
      </div>
      <p className="recipe-card-subtitle">{recipe.subtitle}</p>

      {sequence.length > 0 && <div className="card-pot-chain" aria-label="CY625870 面板按鍵順序">
        {sequence.map((item, idx) => (
          <span
            key={`${recipe.id}-chain-${item.stepNumber}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            {idx > 0 && (
              <span className="chain-arrow" aria-hidden="true">
                ➔
              </span>
            )}
            <span className={`chain-pill chain-pill--${item.action.side}`}>
              {item.action.lid && <LidIcon state={item.action.lid} size={16} />}
              <span>
                {item.action.side && getSideShortLabel(item.action.side) + '・'}{item.action.modeName}{' '}
                {item.action.durationText}{item.action.lid && '（' + getLidShortLabel(item.action.lid) + '）'}
              </span>
            </span>
          </span>
        ))}
      </div>}
    </article>
  );
}
