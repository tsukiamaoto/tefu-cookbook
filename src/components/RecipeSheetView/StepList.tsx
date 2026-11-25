import type { RecipeStep } from '../../types/recipe';
import {
  formatMeasurements,
  getLidLabel,
  getReleaseLabel,
  getSideLabel,
} from '../../utils/formatters';
import { ClockIcon, LidIcon, SteamIcon } from '../Icons';

interface StepListProps {
  steps: RecipeStep[];
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="steps-stack" role="list" aria-label="完整料理步驟">
      {steps.map((step) => {
        const action = step.potAction;
        const releaseLabel = action ? getReleaseLabel(action.releaseMode) : '';

        return (
          <article key={step.stepNumber} className="step-block" role="listitem">
            <div className="step-header">
              <span className="step-num-badge tabular-nums">
                {step.stepNumber}
              </span>
              <h3 className="step-title">{formatMeasurements(step.title)}</h3>
            </div>

            {step.panelStage && (
              <div className={`step-pot-bar step-pot-bar--${step.panelStage.side ?? 'neutral'}`}>
                <div className="step-pot-tags">
                  {step.panelStage.side && <span>{getSideLabel(step.panelStage.side)}</span>}
                  <span>{step.panelStage.modeName}</span>
                  {step.panelStage.lid && <span>{getLidLabel(step.panelStage.lid)}</span>}
                  {step.panelStage.durationText && <span>{step.panelStage.durationText}</span>}
                </div>
              </div>
            )}
            {action && (
              <div className={`step-pot-bar step-pot-bar--${action.side}`}>
                <div className="step-pot-tags tabular-nums">
                  <span>{getSideLabel(action.side)}</span>
                  <span>按【{action.modeName}】</span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <LidIcon state={action.lid} size={18} />
                    {getLidLabel(action.lid)}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <ClockIcon size={18} />
                    {action.durationText}
                  </span>
                  {action.temperature && <span>{formatMeasurements(action.temperature)}</span>}
                  {releaseLabel && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <SteamIcon size={18} />
                      {releaseLabel}
                    </span>
                  )}
                </div>
              </div>
            )}

            {step.instruction && <p className="step-instruction">{formatMeasurements(step.instruction)}</p>}

            {step.tip && <div className="step-tip">小提醒：{formatMeasurements(step.tip)}</div>}
          </article>
        );
      })}
    </div>
  );
}
