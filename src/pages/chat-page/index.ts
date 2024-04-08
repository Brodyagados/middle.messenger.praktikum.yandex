import './chat-page.scss';
import {
  Avatar, Button, ChatDialogInput,
  ChatDialogUser, ChatListAccountLink,
  ChatListHeader, ChatDialog, ChatList,
} from '../../components';
import additionalButtonIconSrc from '../../assets/icons/vertical-dotes.svg';
import attachmentButtonIconSrc from '../../assets/icons/attachment.svg';
import sendButtonIconSrc from '../../assets/icons/arrow-right.svg';
import template from './chat-page.hbs?raw';
import Block from '../../utils/Block';

export interface IChatListItem {
  user: string,
  message: string,
  count?: string,
  isOwner?: boolean,
  isActive?: boolean,
  date: string
}

export interface IChatMessage {
  time: string,
  text?: string,
  imgSrc?: string,
  isOwner?: boolean
}

export class ChatPage extends Block {
  constructor() {
    super({
      list: new ChatList({
        accountLink: new ChatListAccountLink(),
        header: new ChatListHeader(),
        items: [],
      }),
      dialog: new ChatDialog({
        header: [
          new Avatar({ attr: { alt: 'Аватар текущего чата.' } }),
          new ChatDialogUser({ text: 'Вадим' }),
          new Button({
            img: {
              src: additionalButtonIconSrc,
              alt: 'Кнопка открытия меню дополнительных действий с чатом.',
            },
            attr: { title: 'Дополнительно' },
          }),
        ],
        main: [],
        footer: [
          new Button({
            img: {
              src: attachmentButtonIconSrc,
              alt: 'Кнопка прикрепления файла для отправки в чат.',
            },
            attr: { title: 'Прикрепить файл' },
          }),
          new ChatDialogInput({ attr: { placeholder: 'Сообщение', name: 'message' } }),
          new Button({
            img: {
              src: sendButtonIconSrc,
              alt: 'Кнопка отправки сообщения в чат.',
            },
            attr: {
              class: 'button_color_blue button_circle',
              title: 'Отправить',
            },
          }),
        ],
      }),
      attr: { class: 'chat-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
