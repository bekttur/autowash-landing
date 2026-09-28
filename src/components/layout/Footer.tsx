import { Logo } from '@/components/shared/Logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id='footer' className='bg-[#1A1A1D] py-12'>
      <div className='px-[140px]'>
        <a href='#top' className='inline-flex items-center'>
          <Logo />
        </a>
        <p className='mt-2 text-lg font-medium text-white/60'>
          CRM для управления автомойкой.
        </p>

        <div className='mt-8 border-t border-white/10' />

        <p className='mt-8 text-[15px] font-normal text-white/50'>
          © {year} Autowash. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
