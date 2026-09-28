import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { Logo } from '@/components/shared/Logo';
import { useTheme } from '@/context/ThemeProvider';
import { LANDING_NAV_ITEMS } from '@/constants/navigation';

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection = 'features' }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0c]'>
      <div className='flex h-[100px] items-center px-[140px]'>
        <a href='#top' className='flex items-center gap-2.5'>
          <Logo />
        </a>

        <nav
          aria-label='Основная навигация'
          className='ml-10 hidden items-center gap-1 md:flex'
        >
          {LANDING_NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={item.id === activeSection ? 'page' : undefined}
              className={
                item.id === activeSection
                  ? 'rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white'
                  : 'rounded-full px-4 py-2 text-sm text-neutral-400 transition-colors hover:text-white'
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='ml-auto flex items-center gap-2'>
          <Button
            variant='ghost'
            size='icon'
            aria-label={
              theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'
            }
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
          <Button className='bg-[#2870bd] text-white hover:bg-[#2870bd]/85'>
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
}
