import { Reveal } from '@/components/shared/Reveal';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { Tag } from '@/components/shared/Tag';
import {
  LANDING_ONBOARDING_BADGE,
  LANDING_ONBOARDING_HEADING,
  LANDING_ONBOARDING_SUBHEADING,
  LANDING_ONBOARDING_STEPS,
} from '@/constants/onboarding';
import type { OnboardingStep } from '@/types/landing';

function OnboardingStepCard({
  step,
  delayMs = 0,
}: {
  step: OnboardingStep;
  delayMs?: number;
}) {
  return (
    <Reveal
      delayMs={delayMs}
      className='flex flex-1 flex-col gap-7 rounded-[20px] bg-[#1A1A1D] p-5'
    >
      <div className='flex items-center gap-3'>
        <Tag className='text-xl font-medium'>{step.number}</Tag>
        <h3 className='text-2xl font-medium text-white'>{step.title}</h3>
      </div>

      <p className='text-lg font-normal text-white/75'>{step.description}</p>

      <div className='flex flex-wrap gap-2'>
        {step.tags.map((tag) => (
          <Tag key={tag} tone='neutral'>
            {tag}
          </Tag>
        ))}
      </div>
    </Reveal>
  );
}

export function Onboarding() {
  return (
    <section id='onboarding' className='bg-[#0a0a0c] py-24'>
      <div className='px-[140px]'>
        <Eyebrow>{LANDING_ONBOARDING_BADGE}</Eyebrow>

        <h2 className='mt-6 text-[48px] font-medium text-white'>
          {LANDING_ONBOARDING_HEADING}
        </h2>
        <p className='mt-3 text-lg font-medium text-white/60'>
          {LANDING_ONBOARDING_SUBHEADING}
        </p>

        <div className='mt-10 flex flex-col gap-6 lg:flex-row'>
          {LANDING_ONBOARDING_STEPS.map((step, index) => (
            <OnboardingStepCard
              key={step.number}
              step={step}
              delayMs={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
