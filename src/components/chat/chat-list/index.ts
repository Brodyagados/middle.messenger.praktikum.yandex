import './chat-list.scss';
import Block from '../../../utils/Block';
import template from './chat-list.hbs?raw';
import { connect } from '../../../utils/HOC';
import { IChatListItem, ChatListItem } from './chat-list-item';
import { Indexed } from '../../../utils/utils';

export { ChatListAccountLink } from './chat-list-account-link';
export { ChatListHeader } from './chat-list-header';

export interface IChatList {
  accountLink: Block,
  addChatButton: Block,
  header: Block,
  items: Block[]
}

class ChatList extends Block {
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

export const StoredChatList = connect(ChatList, (state: Indexed) => {
  return {
    items: state.chatPage.list.map((item: IChatListItem) => (
      new ChatListItem(item)
    )),
  };
});
