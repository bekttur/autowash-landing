import { LANDING_PARTNERS } from '@/constants/partners';

export function Partners() {
  return (
    <section
      id='partners'
      className='border-y border-[#232325] bg-[#121215] py-8'
    >
      <div className='flex flex-wrap items-center gap-4 px-[140px]'>
        {LANDING_PARTNERS.map((partner) => (
          <img
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className='max-h-full max-w-full object-contain'
          />
        ))}
      </div>
    </section>
  );
}
