import { Check } from 'lucide-react';
import { Reveal } from '@/components/shared/Reveal';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { Tag } from '@/components/shared/Tag';
import {
  LANDING_PRICING_BADGE,
  LANDING_PRICING_HEADING,
  LANDING_PRICING_SUBHEADING,
  LANDING_PRICING_PLANS,
} from '@/constants/pricing';
import type { PricingPlan } from '@/types/landing';

function PricingPlanCard({
  plan,
  delayMs = 0,
}: {
  plan: PricingPlan;
  delayMs?: number;
}) {
  return (
    <Reveal
      delayMs={delayMs}
      className={`flex w-full flex-col gap-6 rounded-[20px] p-8 lg:w-[496px] ${
        plan.featured ? 'bg-[#152238] ring-1 ring-[#2870BD]/40' : 'bg-[#1A1A1D]'
      }`}
    >
      <div className='flex items-start justify-between gap-4'>
        <h3 className='text-2xl font-medium text-white'>{plan.name}</h3>
        {plan.badge ? <Tag tone='navy'>{plan.badge}</Tag> : null}
      </div>

      <p className='text-lg font-normal text-white/75'>{plan.description}</p>

      <div className='flex items-baseline gap-2'>
        <span className='text-xl font-normal text-white'>от</span>
        <span className='text-[42px] font-semibold text-white'>{plan.price}</span>
        <span className='text-xl font-normal text-white'>в месяц</span>
      </div>
      <p className='-mt-4 text-lg font-normal text-white/75'>{plan.priceNote}</p>

      <button
        type='button'
        className={`w-full rounded-xl border border-[#2870BD] px-4 py-3 text-lg font-medium text-[#FCFCFC] ${
          plan.featured ? 'bg-[#2870BD]' : 'bg-[#2870BD]/25'
        }`}
      >
        {plan.cta}
      </button>

      <div className='border-t border-white/10 pt-6'>
        <p className='text-lg font-medium text-white'>{plan.includedLabel}</p>
        <ul className='mt-4 flex flex-col gap-3'>
          {plan.features.map((feature) => (
            <li key={feature} className='flex items-center gap-3'>
              <span className='flex size-5 shrink-0 items-center justify-center rounded-full bg-[#2870BD]'>
                <Check className='size-3 text-white' strokeWidth={3} />
              </span>
              <span className='text-lg font-normal text-white/90'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Pricing() {
  return (
    <section id='pricing' className='bg-[#0a0a0c] py-24'>
      <div className='px-[140px]'>
        <div className='text-center'>
          <Eyebrow>{LANDING_PRICING_BADGE}</Eyebrow>
          <h2 className='mt-6 text-[48px] font-medium text-white'>
            {LANDING_PRICING_HEADING}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg font-medium text-white/60'>
            {LANDING_PRICING_SUBHEADING}
          </p>
        </div>

        <div className='mt-[60px] flex flex-col items-center gap-16 lg:flex-row lg:justify-center'>
          {LANDING_PRICING_PLANS.map((plan, index) => (
            <PricingPlanCard key={plan.id} plan={plan} delayMs={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
