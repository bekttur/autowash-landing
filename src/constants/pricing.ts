import type { PricingPlan } from '@/types/landing';

export const LANDING_PRICING_BADGE = 'Тарифы';

export const LANDING_PRICING_HEADING = 'Тарифы под ваш масштаб';

export const LANDING_PRICING_SUBHEADING =
  'Начните с основного и подключайте аналитику, контроль и AI по мере роста.';

export const LANDING_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'start',
    name: 'Старт',
    description:
      'Для небольшой мойки, которой нужен порядок в ежедневной работе.',
    price: '12 900 ₸',
    priceNote: 'Цена зависит от количества боксов',
    cta: 'Попробовать бесплатно',
    featured: false,
    includedLabel: 'Входит в пакет',
    features: [
      'Записи и очередь',
      'Управление боксами',
      'Клиенты и история визитов',
      'Сотрудники и смены',
      'Базовая аналитика',
      'Доступ с телефона',
    ],
  },
  {
    id: 'business',
    name: 'Бизнес',
    badge: 'Популярное',
    description: 'Для владельца, которому нужен полный контроль над мойкой.',
    price: '24 900 ₸',
    priceNote: 'Цена зависит от количества боксов',
    cta: 'Начать подключение',
    featured: true,
    includedLabel: 'Всё из тарифа «Старт» плюс',
    features: [
      'AI-Контроль операций',
      'Касса и сверка смены',
      'Уведомления о проблемах',
      'Финансовая аналитика',
      'Расчёт сотрудников',
      'Расширенные роли и доступы',
    ],
  },
];
