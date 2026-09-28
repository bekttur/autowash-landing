import { Play } from 'lucide-react';
import { Reveal } from '@/components/shared/Reveal';
import { Eyebrow } from '@/components/shared/Eyebrow';
import { Tag } from '@/components/shared/Tag';
import { useCountUp } from '@/hooks/useCountUp';
import {
  LANDING_PROOF_BADGE,
  LANDING_PROOF_HEADING,
  LANDING_PROOF_SUBHEADING,
  LANDING_PROOF_VIDEO,
  LANDING_PROOF_STATS,
  LANDING_PROOF_TESTIMONIALS,
} from '@/constants/proof';
import type { ProofStat, Testimonial } from '@/types/landing';

function ProofVideoCard({ delayMs = 0 }: { delayMs?: number }) {
  return (
    <Reveal
      delayMs={delayMs}
      className='flex h-full flex-col overflow-hidden rounded-[20px] bg-[#1A1A1D]'
    >
      <button type='button' className='group relative block min-h-0 w-full flex-1'>
        <img
          src={LANDING_PROOF_VIDEO.poster}
          alt=''
          className='absolute inset-0 h-full w-full object-cover'
        />
        <span className='absolute inset-0 flex items-center justify-center'>
          <span className='flex size-16 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-105'>
            <Play className='ml-1 size-6 fill-[#0a0a0c] text-[#0a0a0c]' />
          </span>
        </span>
      </button>
      <div className='flex items-center justify-between gap-4 p-5'>
        <span className='text-lg font-medium text-white'>
          {LANDING_PROOF_VIDEO.title}
        </span>
        <Tag>{LANDING_PROOF_VIDEO.location}</Tag>
      </div>
    </Reveal>
  );
}

function ProofStatValue({ stat, isVisible }: { stat: ProofStat; isVisible: boolean }) {
  const target = parseInt(stat.value.replace(/\D/g, ''), 10);
  const count = useCountUp(target, isVisible);
  const displayValue = Math.round(count).toLocaleString('ru-RU');

  return (
    <>
      <div className='text-[42px] font-medium text-white tabular-nums'>
        {displayValue}
      </div>
      <p className='mt-1 text-lg font-normal text-white/60'>{stat.label}</p>
    </>
  );
}

function ProofStatCard({ stat, delayMs = 0 }: { stat: ProofStat; delayMs?: number }) {
  return (
    <Reveal delayMs={delayMs} className='rounded-[20px] bg-[#1A1A1D] p-5'>
      {(isVisible) => <ProofStatValue stat={stat} isVisible={isVisible} />}
    </Reveal>
  );
}

function ProofTestimonialCard({
  testimonial,
  delayMs = 0,
}: {
  testimonial: Testimonial;
  delayMs?: number;
}) {
  return (
    <Reveal
      delayMs={delayMs}
      className='flex flex-col gap-4 rounded-[20px] bg-[#1A1A1D] p-5'
    >
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-3'>
          <span className='size-12 rounded-full bg-white/20' />
          <span className='text-lg font-semibold text-white'>{testimonial.name}</span>
        </div>
        <Tag>{testimonial.role}</Tag>
      </div>
      <p className='text-lg font-normal text-white/75'>{testimonial.quote}</p>
    </Reveal>
  );
}

export function Proof() {
  return (
    <section id='proof' className='bg-[#0a0a0c] py-24'>
      <div className='px-[140px]'>
        <Eyebrow>{LANDING_PROOF_BADGE}</Eyebrow>

        <h2 className='mt-6 text-[48px] font-medium text-white'>
          {LANDING_PROOF_HEADING}
        </h2>
        <p className='mt-3 text-lg font-medium text-white/60'>
          {LANDING_PROOF_SUBHEADING}
        </p>

        <div className='mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]'>
          <ProofVideoCard delayMs={0} />

          <div className='flex flex-col gap-8'>
            <div className='grid grid-cols-3 gap-8'>
              {LANDING_PROOF_STATS.map((stat, index) => (
                <ProofStatCard key={stat.label} stat={stat} delayMs={index * 100} />
              ))}
            </div>
            {LANDING_PROOF_TESTIMONIALS.map((testimonial, index) => (
              <ProofTestimonialCard
                key={testimonial.name + testimonial.role}
                testimonial={testimonial}
                delayMs={300 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
