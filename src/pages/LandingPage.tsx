import { ThemeProvider } from '@/context/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Partners } from '@/components/sections/Partners';
import { Features } from '@/components/sections/Features';
import { Onboarding } from '@/components/sections/Onboarding';
import { Proof } from '@/components/sections/Proof';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';

export function LandingPage() {
  return (
    <ThemeProvider>
      <div id='top' className='min-h-screen bg-background text-foreground'>
        <Header />
        <main>
          <Hero />
          <Partners />
          <Features />
          <Onboarding />
          <Proof />
          <Pricing />
          <Faq />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
