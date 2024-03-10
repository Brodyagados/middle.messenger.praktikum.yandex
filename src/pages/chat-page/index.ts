import Handlebars from 'handlebars';

import './chat-page.scss';
import testImgSrc from '../../assets/icons/base-avatar.svg'
export { default as ChatPage } from './chat-page.hbs?raw';

Handlebars.registerHelper('chatPageListDataSource', () => {
  return [
    { user: 'Андрей', message: 'Изображение', count: '2', date: '10:49' },
    { user: 'Киноклуб', message: 'стикер', isOwner: true, date: '12:00' },
    { user: 'Илья', message: 'Друзья, у меня для вас особенный выпуск новостей! Дополнительный большой текст', count: '4', date: '15:12' },
    { user: 'Вадим', message: 'Круто!', isOwner: true, isActive: true, date: 'Пт' }
  ]
});

Handlebars.registerHelper('chatPageDialogDataSource', () => {
  return [
    {
      time: '11:56',
      text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА'
        + ' в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.'
        + ' Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все'
        + ' тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой'
        + ' забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса,'
        + ' но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено'
        + ' 25 штук, одну из них недавно продали на аукционе за 45000 евро.'
    },
    { time: '11:56', img: testImgSrc },
    { time: '12:00', text: 'Круто!', isOwner: true }
  ]
});