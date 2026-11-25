import { describe, expect, it } from 'vitest';
import {
  formatMinutesText,
  formatMeasurements,
  formatScaledAmount,
  getLidLabel,
  getSideLabel,
} from './formatters';

describe('formatters', () => {
  it('shows Chinese units for original and scaled recipe quantities', () => {
    for (const servings of [2, 4, 6]) {
      const amount = formatScaledAmount(1, 4, servings);
      expect(formatMeasurements(amount + ' tbsp')).toBe(amount + ' 大匙');
    }
    expect(formatMeasurements('雞（600g）、100ml 米酒、1/2tsp 鹽')).toBe('雞（600 公克）、100 毫升 米酒、1/2 小匙 鹽');
    expect(formatMeasurements('1tbsp、2tbsp、120°C')).toBe('1 大匙、2 大匙、攝氏 120 度');
    expect(formatMeasurements('1500 c.c.、60–150°C、160℃')).toBe('1500 毫升、攝氏 60–150 度、攝氏 160 度');
  });

  it('scales ingredient amounts cleanly without ugly decimals', () => {
    expect(formatScaledAmount(2, 4, 2)).toBe('1');
    expect(formatScaledAmount(3, 4, 2)).toBe('1.5');
    expect(formatScaledAmount(1, 4, 2)).toBe('0.5');
    expect(formatScaledAmount(1, 4, 1)).toBe('1/4');
    expect(formatScaledAmount(3, 4, 6)).toBe('4.5');
    expect(formatScaledAmount(null, 4, 6)).toBe('');
  });

  it('formats minutes text cleanly in Traditional Chinese', () => {
    expect(formatMinutesText(45)).toBe('45分');
    expect(formatMinutesText(60)).toBe('1 小時');
    expect(formatMinutesText(75)).toBe('1小時15分');
  });

  it('returns readable CY625870 side and lid labels', () => {
    expect(getSideLabel('left')).toBe('左側・無壓區');
    expect(getSideLabel('right')).toBe('右側・壓力區');
    expect(getLidLabel('open')).toBe('開蓋操作');
    expect(getLidLabel('closed_unlocked')).toBe('蓋上不鎖定');
    expect(getLidLabel('locked')).toBe('順時鐘鎖緊上蓋');
  });
});
