import type { OnboardingStep } from '@/types/landing';

export const LANDING_ONBOARDING_BADGE = 'Внедрение';

export const LANDING_ONBOARDING_HEADING = 'Подключим без остановки мойки';

export const LANDING_ONBOARDING_SUBHEADING =
  'Настроим систему под ваши процессы, без сложного перехода и лишнего стресса.';

export const LANDING_ONBOARDING_STEPS: OnboardingStep[] = [
  {
    number: 1,
    title: 'Настраиваем мойку',
    description:
      'Подключаем боксы, услуги, цены, сотрудников и правила работы — без лишней ручной настройки с вашей стороны.',
    tags: ['Данные', 'Боксы', 'Настройки'],
  },
  {
    number: 2,
    title: 'Обучаем команду',
    description:
      'Обучаем администратора и сотрудников, проводим тестовую смену и помогаем спокойно перейти на новую систему.',
    tags: ['Тестовя смена', 'Обучение'],
  },
  {
    number: 3,
    title: 'Даём владельцу контроль',
    description:
      'Вы получаете контроль над выручкой, сменами, загрузкой боксов, кассой и работой команды в одном окне.',
    tags: ['Доступ с телефона', 'Контроль'],
  },
];
