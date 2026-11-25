import { getRecipePotSequence } from '../../data/recipes';
import type { DocumentRecipe } from '../../data/recipes/documents';
import type { Recipe } from '../../types/recipe';
import {
  formatMeasurements,
  getLidLabel,
  getReleaseLabel,
  getSideLabel,
} from '../../utils/formatters';
import { ClockIcon, LidIcon, SteamIcon } from '../Icons';

interface PotSequenceStripProps {
  recipe: Recipe | DocumentRecipe;
}

export function PotSequenceStrip({ recipe }: PotSequenceStripProps) {
  const sequence = getRecipePotSequence(recipe);
  if (sequence.length === 0) return null;

  return (
    <section
      className="pot-sequence-row"
      role="list"
      aria-label="萬用鍋依序按鍵步驟"
    >
      {sequence.map((stage, idx) => {
        const { action } = stage;
        const releaseText = getReleaseLabel(action.releaseMode);

        return (
          <div
            key={`${recipe.id}-strip-${stage.stepNumber}`}
            className="pot-stage-wrap"
            role="listitem"
          >
            {idx > 0 && (
              <div className="pot-stage-connector" aria-hidden="true">
                <span className="pot-stage-connector-desktop">➔</span>
                <span className="pot-stage-connector-mobile">↓</span>
              </div>
            )}

            <div className={`pot-stage-card pot-stage-card--${action.side}`}>
              <div className={`pot-stage-side pot-stage-side--${action.side}`}>
                <span className={`stage-index stage-index--${action.side}`}>
                  {idx + 1}
                </span>
                <span>{action.side ? getSideLabel(action.side) : '操作'}</span>
              </div>

              <div className="pot-stage-mode">【{action.modeName}】</div>

              <div className="pot-stage-details tabular-nums">
                {action.lid && <span className="pot-stage-detail-item">
                  <LidIcon state={action.lid} size={19} />
                  {getLidLabel(action.lid)}
                </span>}
                {action.durationText && <span className="pot-stage-detail-item">
                  <ClockIcon size={19} />
                  {formatMeasurements(action.durationText)}
                </span>}
                {action.description && action.description !== action.modeName && <span>{formatMeasurements(action.description)}</span>}
                {action.temperature && (
                  <span className="pot-stage-detail-item">
                    {formatMeasurements(action.temperature)}
                  </span>
                )}
              </div>

              {(action.shortAction || releaseText) && (
                <div className="pot-stage-note">
                  {action.shortAction && formatMeasurements(action.shortAction)}
                  {action.shortAction && releaseText ? '・' : ''}
                  {releaseText && (
                    <span className="pot-stage-release">
                      <SteamIcon size={16} />
                      {releaseText}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
