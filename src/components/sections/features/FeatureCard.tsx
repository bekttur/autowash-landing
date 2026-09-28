import type { FeatureCard as FeatureCardData } from '@/types/landing';
import { RevealImage } from './RevealImage';
import { CameraRevealImage } from './CameraRevealImage';

interface FeatureCardProps {
  feature: FeatureCardData;
  className?: string;
  imagePosition?: 'top' | 'bottom';
  imageAsBackground?: boolean;
  animateImage?: boolean;
}

export function FeatureCard({
  feature,
  className = '',
  imagePosition = 'bottom',
  imageAsBackground = false,
  animateImage = false,
}: FeatureCardProps) {
  const textBlock = (
    <div className={imagePosition === 'top' ? 'p-10 pt-6' : 'p-10 pb-6'}>
      <h3 className='text-2xl font-medium text-white'>{feature.title}</h3>
      <p className='mt-3 text-lg font-normal text-white/75 whitespace-pre-line'>
        {feature.description}
      </p>
    </div>
  );

  if (imageAsBackground) {
    return (
      <div
        className={`relative h-[500px] overflow-hidden rounded-[20px] bg-[#1A1A1D] ${className}`}
      >
        {animateImage ? (
          <RevealImage src={feature.image} objectPosition='object-center' />
        ) : (
          <img
            src={feature.image}
            alt=''
            className='absolute inset-0 h-full w-full object-cover'
          />
        )}
        <div className='relative'>{textBlock}</div>
      </div>
    );
  }

  const imageBlock = (
    <div className='relative flex-1'>
      {animateImage && feature.imageOff ? (
        <CameraRevealImage offSrc={feature.imageOff} onSrc={feature.image} />
      ) : animateImage ? (
        <RevealImage src={feature.image} />
      ) : (
        <img
          src={feature.image}
          alt=''
          className='absolute inset-0 h-full w-full object-cover object-top'
        />
      )}
    </div>
  );

  return (
    <div
      className={`flex h-[500px] flex-col overflow-hidden rounded-[20px] bg-[#1A1A1D] ${className}`}
    >
      {imagePosition === 'top' ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}
