import type { ReactNode } from 'react';

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className='inline-block rounded-lg bg-[#41516533] px-5 py-1.5 text-[15px] font-semibold text-white'>
      {children}
    </span>
  );
}
