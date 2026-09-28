import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type TagTone = 'blue' | 'navy' | 'neutral';

interface TagProps {
  tone?: TagTone;
  className?: string;
  children: ReactNode;
}

const toneClasses: Record<TagTone, string> = {
  blue: 'bg-[#2870BD]',
  navy: 'bg-[#2E4F73]',
  neutral: 'bg-[#2B2F33]',
};

export function Tag({ tone = 'blue', className, children }: TagProps) {
  return (
    <span
      className={cn(
        'rounded-lg px-4 py-1.5 text-[15px] font-semibold text-white',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
