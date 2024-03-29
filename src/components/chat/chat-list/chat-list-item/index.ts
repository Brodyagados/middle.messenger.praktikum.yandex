import './chat-list-item.scss';
import template from './chat-list-item.hbs?raw';
import Block from '../../../../utils/Block';
import { Avatar } from '../../..';

interface IChatListItem {
    isActive?: boolean,
    avatarSrc?: string,
    user: string,
    isOwner?: boolean,
    message: string,
    date: string,
    count?: string
}

export class ChatListItem extends Block {
  constructor(props: IChatListItem) {
    const { avatarSrc, isActive, ...itemProps } = props;

    super({
      ...itemProps,
      avatar: new Avatar({ attr: { src: avatarSrc, alt: 'Аватар чата.' } }),
      attr: { class: `chat-list__item${isActive ? ' chat-list__item_active' : ''}` },
    }, 'li');
  }

  render() {
    return this.compile(template, this._props);
  }
}
