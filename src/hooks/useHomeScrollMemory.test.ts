import { describe, expect, it } from 'vitest';
import {
  HOME_SCROLL_STORAGE_KEY,
  readHomeScrollY,
  saveHomeScrollY,
} from './useHomeScrollMemory';

function createMemoryStorage(initial: Record<string, string> = {}) {
  const store = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
  };
}

describe('home scroll memory storage helpers', () => {
  it('saves and reads positive rounded scroll positions', () => {
    const storage = createMemoryStorage();
    saveHomeScrollY(1234.6, storage);
    expect(storage.getItem(HOME_SCROLL_STORAGE_KEY)).toBe('1235');
    expect(readHomeScrollY(storage)).toBe(1235);
  });

  it('normalizes negative, NaN, and missing values to 0', () => {
    const storage = createMemoryStorage();
    expect(readHomeScrollY(storage)).toBe(0);

    saveHomeScrollY(-50, storage);
    expect(readHomeScrollY(storage)).toBe(0);

    saveHomeScrollY(Number.NaN, storage);
    expect(readHomeScrollY(storage)).toBe(0);

    expect(readHomeScrollY(createMemoryStorage({ [HOME_SCROLL_STORAGE_KEY]: 'not-a-number' }))).toBe(0);
  });

  it('handles storage failures gracefully', () => {
    const throwingStorage = {
      getItem: () => {
        throw new Error('blocked');
      },
      setItem: () => {
        throw new Error('blocked');
      },
    };

    expect(() => saveHomeScrollY(400, throwingStorage)).not.toThrow();
    expect(readHomeScrollY(throwingStorage)).toBe(0);
    expect(readHomeScrollY(null)).toBe(0);
  });
});
