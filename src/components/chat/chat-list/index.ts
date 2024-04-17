import './chat-list.scss';
import Block from '../../../utils/Block';
import template from './chat-list.hbs?raw';

export { ChatListAccountLink } from './chat-list-account-link';
export { ChatListHeader } from './chat-list-header';
export { ChatListItem } from './chat-list-item';

export interface IChatList {
  accountLink: Block,
  addChatButton: Block,
  addChatModal: Block,
  header: Block,
  items: Block[]
}

export class ChatList extends Block {
  constructor(props: IChatList) {
    super({
      ...props,
      attr: { class: 'chat-list' },
    }, 'nav');
  }

  render() {
    return this.compile(template, this._props);
  }
}
