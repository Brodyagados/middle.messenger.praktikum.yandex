import './chat-list-item.scss';
import template from './chat-list-item.hbs?raw';
import Block from '../../../../utils/Block';
import { Avatar } from '../../..';
import { BaseAPI } from '../../../../api/base-api';
import Store from '../../../../utils/Store';

interface IChatListItem {
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
    const { avatar, isActive, last_message, ...itemProps } = props;
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
      isOwner: last_message?.id === Store.getState().user?.id,
      avatar: new Avatar({
        attr: {
          src: avatar ? `${BaseAPI.baseUrl}/resources${avatar}` : undefined,
          alt: 'Аватар чата.'
        }
      }),
      attr: {
        class: `chat-list__item${isActive ? ' chat-list__item_active' : ''}`
      },
    }, 'li');
  }

  render() {
    return this.compile(template, this._props);
  }
}
