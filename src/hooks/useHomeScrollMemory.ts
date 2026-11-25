import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

export const HOME_SCROLL_STORAGE_KEY = 'tefu-cookbook.home-scroll-y';

function getSessionStorage(): Storage | null {
  try {
    return typeof window !== 'undefined' ? window.sessionStorage : null;
  } catch {
    return null;
  }
}

export function readHomeScrollY(
  storage: Pick<Storage, 'getItem'> | null = getSessionStorage()
): number {
  if (!storage) return 0;
  try {
    const raw = storage.getItem(HOME_SCROLL_STORAGE_KEY);
    if (raw === null) return 0;
    const y = Number(raw);
    return Number.isFinite(y) && y > 0 ? y : 0;
  } catch {
    return 0;
  }
}

export function saveHomeScrollY(
  y: number,
  storage: Pick<Storage, 'setItem'> | null = getSessionStorage()
): void {
  if (!storage) return;
  const normalized = Number.isFinite(y) && y > 0 ? Math.round(y) : 0;
  try {
    storage.setItem(HOME_SCROLL_STORAGE_KEY, String(normalized));
  } catch {
    // Ignore storage errors (e.g. private browsing restrictions).
  }
}

export function useHomeScrollMemory(isHomeActive: boolean): {
  captureHomeScroll: () => void;
} {
  const scrollYRef = useRef<number>(readHomeScrollY());

  useEffect(() => {
    if (typeof window === 'undefined' || !('scrollRestoration' in window.history)) {
      return;
    }
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  const captureHomeScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    const currentY = window.scrollY;
    scrollYRef.current = currentY;
    saveHomeScrollY(currentY);
  }, []);

  useLayoutEffect(() => {
    if (!isHomeActive || typeof window === 'undefined') return;
    window.scrollTo({
      top: scrollYRef.current,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [isHomeActive]);

  useEffect(() => {
    if (!isHomeActive || typeof window === 'undefined') return;

    const onScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    const onPageHide = () => {
      saveHomeScrollY(scrollYRef.current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pagehide', onPageHide);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pagehide', onPageHide);
      saveHomeScrollY(scrollYRef.current);
    };
  }, [isHomeActive]);

  return { captureHomeScroll };
}
