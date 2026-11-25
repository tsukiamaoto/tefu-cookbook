import type { Ingredient } from '../../types/recipe';
import { formatMeasurements, formatScaledAmount } from '../../utils/formatters';

interface IngredientPanelProps {
  ingredients: Ingredient[];
  baseServings: number | null;
  targetServings: number;
  onChangeServings: (servings: number) => void;
}

const SERVING_CHOICES = [2, 4, 6];

export function IngredientPanel({
  ingredients,
  baseServings,
  targetServings,
  onChangeServings,
}: IngredientPanelProps) {
  const mainItems = ingredients.filter((item) => item.group === 'main');
  const seasoningItems = ingredients.filter(
    (item) => item.group === 'seasoning'
  );

  const renderGroup = (title: string, items: Ingredient[]) => {
    if (items.length === 0) return null;
    return (
      <>
        <h3 className="ingredient-group-title">{title}</h3>
        <ul className="ingredient-list">
          {items.map((item, index) => {
            const qty = formatScaledAmount(
              item.amount,
              baseServings ?? targetServings,
              targetServings
            );
            return (
              <li key={`${item.name}-${index}`} className="ingredient-row">
                <div className="ingredient-text">
                  <span className="ingredient-name">{formatMeasurements(item.name)}</span>
                  {item.originalQuantity !== undefined && item.note && item.note.length > 40 ? (
                    <details className="ingredient-note"><summary>備料說明</summary>{formatMeasurements(item.note)}</details>
                  ) : item.note && (
                    <span className="ingredient-note">{formatMeasurements(item.note)}</span>
                  )}
                </div>
                <span className="ingredient-qty tabular-nums">
                  {formatMeasurements(item.byServings?.[targetServings] ??
                    ((baseServings === null || baseServings === targetServings) && item.originalQuantity
                      ? item.originalQuantity : [qty, item.unit].filter(Boolean).join(' ')))}
                  {baseServings && baseServings !== targetServings && item.originalQuantity && item.amount === null && !item.byServings && /\d/.test(item.unit) ? '（原方）' : ''}

                </span>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <section
      className="sheet-card ingredient-column"
      aria-label="食材與比例參考"
    >
      <div className="section-header">
        <h2 className="section-title">食材與比例</h2>
        <div className="serving-switcher" role="group" aria-label="份量換算">
          {baseServings === null && <span>原方份量</span>}
          {baseServings !== null && [...new Set([...SERVING_CHOICES, baseServings])].sort((a,b) => a-b).map((num) => (
            <button
              key={num}
              type="button"
              className="serving-btn tabular-nums"
              aria-pressed={targetServings === num}
              onClick={() => onChangeServings(num)}
            >
              {num}人
            </button>
          ))}
        </div>
      </div>

      {renderGroup('主材料', mainItems)}
      {renderGroup('調味料與液體', seasoningItems)}
    </section>
  );
}
