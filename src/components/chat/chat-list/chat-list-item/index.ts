import './chat-list-item.scss';
import template from './chat-list-item.hbs?raw';
import Block from '../../../../utils/Block';
import { Avatar } from '../../..';
import { BaseAPI } from '../../../../api/base-api';
import Store from '../../../../utils/Store';
import chatController from '../../../../controllers/chat-controller';

export interface IChatListItem {
  id: number,
  isActive?: boolean,
  avatar?: string,
  title: string,
  unread_count?: number,
  last_message?: {
    id: number,
    content: string,
    time: string
  }
}

export class ChatListItem extends Block {
  constructor(props: IChatListItem) {
    const { id, avatar, isActive, last_message, ...itemProps } = props;
    const fullDate = last_message ? new Date(last_message.time) : null;
    const locale = 'ru-RU';
    const date = fullDate
      ? fullDate.toLocaleDateString(locale) === new Date().toLocaleDateString(locale)
        ? fullDate.toLocaleTimeString(locale, { hour12: false, hour: 'numeric', minute: 'numeric' })
        : fullDate.toLocaleDateString(locale)
      : null;

    super({
      ...itemProps,
      message: last_message?.content,
      date,
      isOwner: last_message && last_message.id === Store.getState().user?.id,
      avatar: new Avatar({
        attr: {
          src: avatar ? `${BaseAPI.baseUrl}/resources${avatar}` : undefined,
          alt: 'Аватар чата.',
        },
      }),
      attr: {
        class: `chat-list__item${isActive ? ' chat-list__item_active' : ''}`,
      },
      events: {
        click: (event: Event) => {
          event.preventDefault();

          const list = Store.getState().chatPage.list;
          list.forEach((chat: IChatListItem) => {
            chat.isActive = chat.id === id ? true : false;
          });

          const current = list.find((chat: IChatListItem) => chat.id === id);
          Store.set('chatPage.list', list);
          Store.set('chatPage.current', current);

          chatController.connect();
        },
      },
    }, 'li');
  }

  render() {
    return this.compile(template, this._props);
  }
}
