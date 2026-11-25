import { useEffect, useState } from 'react';

export function useWakeLock(active: boolean): { isAwake: boolean } {
  const [isAwake, setIsAwake] = useState(false);

  useEffect(() => {
    const supported =
      typeof navigator !== 'undefined' &&
      'wakeLock' in navigator &&
      Boolean(navigator.wakeLock);

    if (!active || !supported) {
      setIsAwake(false);
      return;
    }

    let sentinel: WakeLockSentinel | null = null;
    let cancelled = false;

    const requestLock = async () => {
      try {
        const lock = await navigator.wakeLock.request('screen');
        if (cancelled) {
          await lock.release();
          return;
        }
        sentinel = lock;
        setIsAwake(true);
        lock.addEventListener('release', () => {
          if (!cancelled) setIsAwake(false);
        });
      } catch {
        setIsAwake(false);
      }
    };

    void requestLock();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && !cancelled) {
        void requestLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (sentinel && !sentinel.released) {
        void sentinel.release().catch(() => {});
      }
      setIsAwake(false);
    };
  }, [active]);

  return { isAwake };
}
