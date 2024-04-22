import './chat-dialog-message.scss';
import template from './chat-dialog-message.hbs?raw';
import Block from '../../../../utils/Block';
import { TWsMessageType } from '../../../../utils/WsClient';
import { BaseAPI } from '../../../../api/base-api';

//TODO: Доработать структуру сообщения
export interface IChatDialogMessage {
  id: number,
  chat_id: number,
  time: string,
  type: TWsMessageType,
  user_id: number,
  content?: string,
  file?: {
    path: string
  },
  isOwner?: boolean,
}

export class ChatDialogMessage extends Block {
  constructor(props: IChatDialogMessage) {
    const { isOwner, file, content } = props;

    super({
      ...props,
      attr: { class: `chat-dialog__message${isOwner ? ' chat-dialog__message_owner' : ''}${file ? ' chat-dialog__message_image' : ''}` },
      file: file ? `${BaseAPI.baseUrl}/resources${file.path}` : null,
      content: !file ? content : null
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
