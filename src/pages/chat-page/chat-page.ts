import './chat-page.scss';
import template from './chat-page.hbs?raw';
import { ChatDialog, ChatList, IChatDialog, IChatList } from '../../components';
import Block from '../../utils/Block';
import renderTemplate from '../../utils/render-template';


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
    super('div', props);
    this._props = props;
  }

  render(): string {
    const { list, dialog } = this._props;
    const context = {
      list: new ChatList(list).render(),
      dialog: new ChatDialog(dialog).render()
    };

    return renderTemplate(template, context);
  }
}
