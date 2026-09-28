import { PlayCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/shared/Button';
import { Eyebrow } from '@/components/shared/Eyebrow';
import heroBg from '@/assets/landing/landing-hero-bg.webp';

export function Hero() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id='hero'
      className='relative flex h-187.5 items-center overflow-hidden bg-[#050506]'
    >
      <div className='absolute inset-0'>
        <img
          src={heroBg}
          alt=''
          className={`h-full w-full object-cover transition-transform duration-[2000ms] ease-out motion-reduce:transition-none ${
            isRevealed ? 'scale-100' : 'scale-110'
          }`}
        />
        <div className='absolute inset-0 bg-linear-to-r from-black via-black/5 to-black/10' />
        <div className='absolute inset-0 bg-linear-to-t from-black via-transparent to-black/50' />
        <div
          aria-hidden='true'
          className={`absolute inset-0 bg-black transition-opacity duration-[2000ms] ease-out motion-reduce:transition-none ${
            isRevealed ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      <div className='relative w-full px-35'>
        <div className='max-w-xl'>
          <Eyebrow>CRM Система</Eyebrow>

          <h1 className='mt-6 text-[64px] leading-[1.05] font-medium tracking-tight text-white'>
            Вся автомойка
            <br />
            под контролем
          </h1>

          <p className='mt-6 max-w-md text-[18px] font-medium text-white/60'>
            Знайте, что происходит на мойке, сколько она зарабатывает и где
            теряются деньги — в реальном времени
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-6'>
            <Button className='h-auto rounded-xl border border-[#2870BD] bg-[#2870BD] px-4 py-3 text-[15px] font-medium text-white hover:bg-[#2870BD]/90'>
              Запросить демо
            </Button>
            <a
              href='#demo'
              className='flex items-center gap-2.5 text-base font-medium text-white transition-opacity hover:opacity-80'
            >
              <PlayCircle className='size-8' strokeWidth={1.5} />
              Посмотреть систему
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
