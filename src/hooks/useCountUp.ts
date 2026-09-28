import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  duration?: number;
}

export function useCountUp(
  target: number,
  isActive: boolean,
  { duration = 1800 }: UseCountUpOptions = {},
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) {
      setValue(target);
      return undefined;
    }

    let frame: number;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, isActive, duration]);

  return value;
}
