import { MainMenu } from '../../../models/main-menu.model';

export const MainMenuList: MainMenu[] = [
  {
    title: 'داشبورد',
    link: '/panel/dashboard',
    icon: 'bi bi-house',
  },
  {
    title: 'مدیریت واحدها',
    link: '/panel/building/management',
    icon: 'bi bi-building',
  },
  {
    title: 'پرداخت‌ها',
    link: '/panel',
    icon: 'bi bi-credit-card-2-back',
  },
  {
    title: 'درخواست‌ها',
    link: '/panel',
    icon: 'bi bi-pencil-square',
  },
  {
    title: 'گزارش‌ها',
    link: '/panel/building/reports',
    icon: 'bi bi-list-check',
  },
  {
    title: 'مدیریت قرارداد‌ها',
    link: '/panel',
    icon: 'bi bi-journal',
  },
  {
    title: 'امکانات',
    link: '/panel',
    icon: 'bi bi-sliders2',
  },
  {
    title: 'تیکت',
    link: '/panel/building/ticket',
    icon: 'bi bi-ticket',
  },
  {
    title: 'بازارچه',
    link: '/panel',
    icon: 'bi bi-cart',
  },
  {
    title: 'تنظیمات',
    link: '/panel',
    icon: 'bi bi-gear',
  },
  {
    title: 'سوالات متدوال',
    link: '/panel',
    icon: 'bi bi-question-lg',
  },
];
