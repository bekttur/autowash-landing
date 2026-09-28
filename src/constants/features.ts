import type { FeatureCard } from '@/types/landing';
import timelineImg from '@/assets/landing/landing-feature-timeline.webp';
import aiControlImg from '@/assets/landing/landing-feature-ai-control.webp';
import aiControlOffImg from '@/assets/landing/landing-feature-ai-control-off.webp';
import phoneImg from '@/assets/landing/landing-feature-phone.webp';
import cashImg from '@/assets/landing/landing-feature-cash.webp';
import evidenceImg from '@/assets/landing/landing-feature-evidence.webp';

export const LANDING_FEATURES_HEADING =
  'Всё, что нужно владельцу — в одной системе';

export const LANDING_FEATURES_SUBHEADING =
  'Боксы, смены, касса, сотрудники и контроль операций — всё, что нужно для управления мойкой каждый день.';

export const LANDING_FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'shift-overview',
    title: 'Вся смена перед глазами',
    description:
      'Видно, какие боксы заняты, кто сейчас работает и\nгде образуется простой',
    image: timelineImg,
  },
  {
    id: 'ai-control',
    title: 'AI-контроль работы мойки',
    description:
      'Система отмечает подозрительные эпизоды и показывает, что именно стоит проверить — без просмотра часов записей с камер',
    image: aiControlImg,
    imageOff: aiControlOffImg,
  },
  {
    id: 'mobile-control',
    title: 'Контроль с телефона',
    description: 'Удалённый контроль владельца',
    image: phoneImg,
  },
  {
    id: 'cash-reconciliation',
    title: 'Касса и сверка смены',
    description: 'Система быстро находить расхождения',
    image: cashImg,
  },
  {
    id: 'attention-only',
    title: 'Только то, что требует внимания',
    description: 'Показываем эпизоды, которые стоит проверить',
    image: evidenceImg,
  },
];
