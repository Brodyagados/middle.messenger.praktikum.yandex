import './chat-page.scss';
import template from './chat-page.hbs?raw';
import { ChatDialog, ChatList, IChatDialog, IChatList } from '../../components';
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

interface IChatPage {
  list: IChatList,
  dialog: IChatDialog
}

export default class ChatPage extends Block {
  constructor(props: IChatPage) {
    const { list, dialog } = props;

    super({
      list: new ChatList(list),
      dialog: new ChatDialog(dialog),
      attr: { class: 'chat-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
