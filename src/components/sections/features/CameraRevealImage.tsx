import type { CSSProperties } from 'react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface CameraRevealImageProps {
  offSrc: string;
  onSrc: string;
}

type MaskStyle = CSSProperties & { '--reveal-radius'?: string };

export function CameraRevealImage({ offSrc, onSrc }: CameraRevealImageProps) {
  const [ref, isVisible] = useRevealOnScroll();

  const maskGradient =
    'radial-gradient(circle at 100% 0%, #000 var(--reveal-radius), transparent calc(var(--reveal-radius) + 15%))';
  const maskStyle: MaskStyle = {
    '--reveal-radius': isVisible ? '115%' : '0%',
    WebkitMaskImage: maskGradient,
    maskImage: maskGradient,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    transition: '--reveal-radius 4200ms ease-out',
  };

  return (
    <div ref={ref} className='absolute inset-0'>
      <img src={offSrc} alt='' className='absolute inset-0 h-full w-full object-cover' />
      <img
        src={onSrc}
        alt=''
        style={maskStyle}
        className='absolute inset-0 h-full w-full object-cover motion-reduce:transition-none'
      />
    </div>
  );
}
