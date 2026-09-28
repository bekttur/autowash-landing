import type { ReactNode } from 'react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';
import { cn } from '@/lib/utils';

type RevealDistance = 4 | 6;

interface RevealProps {
  delayMs?: number;
  distance?: RevealDistance;
  className?: string;
  children: ReactNode | ((isVisible: boolean) => ReactNode);
}

const distanceClasses: Record<RevealDistance, string> = {
  4: 'translate-y-4',
  6: 'translate-y-6',
};

export function Reveal({
  delayMs = 0,
  distance = 6,
  className,
  children,
}: RevealProps) {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        isVisible ? 'translate-y-0 opacity-100' : `${distanceClasses[distance]} opacity-0`,
        className,
      )}
    >
      {typeof children === 'function' ? children(isVisible) : children}
    </div>
  );
}
