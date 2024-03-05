import Handlebars from 'handlebars';

import './chat-page.scss';
export { default as ChatPage } from './chat-page.hbs?raw';

Handlebars.registerHelper('chatPageListDataSource', () => {
  return [
    { user: 'Андрей', message: 'Изображение', count: '2', avatar: '../assets/opossum_1.png', date: '10:49' },
    { user: 'Киноклуб', message: 'стикер', isOwner: true, date: '12:00' },
    { user: 'Илья', message: 'Друзья, у меня для вас особенный выпуск новостей! Дополнительный большой текст', count: '4', date: '15:12' },
    { user: 'Вадим', message: 'Круто!', isOwner: true, isActive: true, date: 'Пт' }
  ]
});
