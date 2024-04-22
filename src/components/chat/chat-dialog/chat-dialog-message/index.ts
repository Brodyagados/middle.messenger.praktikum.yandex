import './chat-dialog-message.scss';
import template from './chat-dialog-message.hbs?raw';
import Block from '../../../../utils/Block';
import { TWsMessageType } from '../../../../utils/WsClient';

//TODO: Доработать структуру сообщения
export interface IChatDialogMessage {
  id: number,
  chat_id: number,
  time: string,
  type: TWsMessageType,
  user_id: number,
  content?: string,
  file?: string,
  isOwner?: boolean,
}

export class ChatDialogMessage extends Block {
  constructor(props: IChatDialogMessage) {
    super({
      ...props,
      attr: { class: `chat-dialog__message${props.isOwner ? ' chat-dialog__message_owner' : ''}` },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
