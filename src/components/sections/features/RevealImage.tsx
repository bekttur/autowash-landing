import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

interface RevealImageProps {
  src: string;
  objectPosition?: string;
}

export function RevealImage({ src, objectPosition = 'object-top' }: RevealImageProps) {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <div ref={ref} className='absolute inset-0'>
      <img
        src={src}
        alt=''
        className={`h-full w-full object-cover ${objectPosition} transition-transform duration-[3200ms] ease-out motion-reduce:transition-none ${
          isVisible ? 'scale-100' : 'scale-100'
        }`}
      />
      <div
        aria-hidden='true'
        className={`absolute inset-0 bg-black transition-opacity duration-[3200ms] ease-out motion-reduce:transition-none ${
          isVisible ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
