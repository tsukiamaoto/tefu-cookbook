import type { LidState, PotSide, ReleaseMode } from '../types/recipe';

const measurementLabels: Record<string, string> = {
  tbsp: '大匙', tablespoon: '大匙', tablespoons: '大匙',
  tsp: '小匙', teaspoon: '小匙', teaspoons: '小匙',
  T: '大匙', TS: '大匙', t: '小匙', ts: '小匙',
  ml: '毫升', cc: '毫升', 'c.c.': '毫升', cl: '厘升', l: '公升', liter: '公升', liters: '公升',
  g: '公克', gr: '公克', gram: '公克', grams: '公克', kg: '公斤', kilogram: '公斤', kilograms: '公斤', oz: '盎司',
  cup: '杯', cups: '杯', pc: '個', pcs: '個', cloves: '瓣',
  cm: '公分', mm: '毫米', kpa: '千帕', min: '分鐘', mins: '分鐘',
};

export function formatMeasurements(text: string): string {
  return text
    .replace(/(\d+(?:\.\d+)?(?:[–～~-]\d+(?:\.\d+)?)?)[ \t]*(?:°C|℃)/gi, '攝氏 $1 度')
    .replace(/(\d+(?:\.\d+)?|[¼½¾]|少許)[ \t]*(c\.c\.|[a-z]+)(?![a-z])/gi, (original, amount, unit: string) => {
      const key = Object.hasOwn(measurementLabels, unit) ? unit : unit.toLowerCase();
      return Object.hasOwn(measurementLabels, key) ? `${amount} ${measurementLabels[key]}` : original;
    })
    .replace(/([\d./]+\s*(?:大匙|小匙|公克|公斤|毫升|公升|杯))\s*[（(]\1[）)]/g, '$1');
}

export function formatScaledAmount(
  amount: number | null,
  baseServings: number,
  targetServings: number
): string {
  if (amount === null) return '';
  const scaled = (amount * targetServings) / baseServings;
  const rounded = Math.round(scaled * 4) / 4;

  const whole = Math.floor(rounded);
  const frac = rounded - whole;

  if (rounded <= 0) return '少許';
  if (Math.abs(frac) < 0.01) return String(whole);
  if (Math.abs(frac - 0.5) < 0.01) {
    return whole > 0 ? `${whole}.5` : '0.5';
  }
  if (Math.abs(frac - 0.25) < 0.01) {
    return whole > 0 ? `${whole}.25` : '1/4';
  }
  if (Math.abs(frac - 0.75) < 0.01) {
    return whole > 0 ? `${whole}.75` : '3/4';
  }
  return String(Number(rounded.toFixed(1)));
}

export function getSideLabel(side: PotSide): string {
  return side === 'left' ? '左側・無壓區' : '右側・壓力區';
}

export function getSideShortLabel(side: PotSide): string {
  return side === 'left' ? '左側' : '右側';
}

export function getLidLabel(lid: LidState): string {
  switch (lid) {
    case 'open':
      return '開蓋操作';
    case 'closed_unlocked':
      return '蓋上不鎖定';
    case 'locked':
      return '順時鐘鎖緊上蓋';
  }
}

export function getLidShortLabel(lid: LidState): string {
  switch (lid) {
    case 'open':
      return '開蓋';
    case 'closed_unlocked':
      return '蓋上不鎖';
    case 'locked':
      return '鎖緊上蓋';
  }
}

export function getReleaseLabel(mode?: ReleaseMode): string {
  switch (mode) {
    case 'natural_auto':
      return '自然自動洩壓';
    case 'quick_manual':
      return '即時排氣洩壓';
    default:
      return '';
  }
}

export function formatMinutesText(minutes: number): string {
  if (minutes >= 60 && minutes % 60 === 0) {
    return `${minutes / 60} 小時`;
  }
  if (minutes > 60) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}小時${m}分`;
  }
  return `${minutes}分`;
}

export function buildYoutubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}
