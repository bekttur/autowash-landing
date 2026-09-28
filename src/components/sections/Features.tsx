import {
  LANDING_FEATURES_HEADING,
  LANDING_FEATURES_SUBHEADING,
  LANDING_FEATURE_CARDS,
} from '@/constants/features';
import { FeatureCard } from './features/FeatureCard';

const [shiftOverview, aiControl, mobileControl, cashReconciliation, attentionOnly] =
  LANDING_FEATURE_CARDS;

export function Features() {
  return (
    <section id='features' className='bg-[#0a0a0c] py-24'>
      <div className='px-[140px]'>
        <h2 className='text-center text-[48px] font-medium text-white'>
          {LANDING_FEATURES_HEADING}
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-center text-lg font-medium text-white/60'>
          {LANDING_FEATURES_SUBHEADING}
        </p>

        <div className='mt-16 flex flex-col gap-8'>
          <div className='flex flex-col gap-8 lg:flex-row'>
            <FeatureCard
              feature={shiftOverview}
              className='lg:flex-[880]'
              imageAsBackground
              animateImage
            />
            <FeatureCard feature={aiControl} className='lg:flex-[488]' animateImage />
          </div>
          <div className='flex flex-col gap-8 lg:flex-row'>
            <FeatureCard feature={mobileControl} className='lg:flex-[360]' />
            <FeatureCard
              feature={cashReconciliation}
              className='lg:flex-[488]'
              imagePosition='top'
            />
            <FeatureCard feature={attentionOnly} className='lg:flex-[488]' />
          </div>
        </div>
      </div>
    </section>
  );
}
