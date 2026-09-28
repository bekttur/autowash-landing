import type { CSSProperties } from 'react';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface CameraRevealImageProps {
  offSrc: string;
  onSrc: string;
}

export function CameraRevealImage({ offSrc, onSrc }: CameraRevealImageProps) {
  const [ref, isVisible] = useRevealOnScroll();

  const maskGradient = 'radial-gradient(circle, #000 15%, transparent 100%)';
  const maskSize = isVisible ? '320% 320%' : '1% 1%';
  const maskStyle: CSSProperties = {
    WebkitMaskImage: maskGradient,
    maskImage: maskGradient,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: '100% 0%',
    maskPosition: '100% 0%',
    WebkitMaskSize: maskSize,
    maskSize,
    transition: 'mask-size 4200ms ease-out, -webkit-mask-size 4200ms ease-out',
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
