import type { ProofStat, ProofVideo, Testimonial } from '@/types/landing';
import proofVideoPoster from '@/assets/landing/landing-proof-video.webp';

export const LANDING_PROOF_BADGE = 'Подключения';

export const LANDING_PROOF_HEADING = 'Проверено в реальной работе';

export const LANDING_PROOF_SUBHEADING =
  'Посмотрите, как Autowash работает на реальной смене';

export const LANDING_PROOF_VIDEO: ProofVideo = {
  poster: proofVideoPoster,
  title: 'Автомойка Mega Center Almaty',
  location: 'Алматы, Достык 82',
};

export const LANDING_PROOF_STATS: ProofStat[] = [
  { value: '3 245', label: 'Заказов проведено' },
  { value: '32', label: 'Подключенных бокса' },
  { value: '126', label: 'Смен отработано' },
];

export const LANDING_PROOF_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Артем Макаров',
    role: 'Владелец мойки',
    quote:
      'Раньше, чтобы понять, как прошла смена, приходилось собирать информацию у администратора. Сейчас основные показатели, касса и загрузка боксов видны в одном месте.',
  },
  {
    name: 'Артем Макаров',
    role: 'Админ мойки',
    quote:
      'Записи, очередь и работа боксов теперь находятся на одном экране. Меньше переключений и проще понимать, кто следующий и что происходит в смене',
  },
];
