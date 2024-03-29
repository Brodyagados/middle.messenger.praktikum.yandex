import './chat-dialog-message.scss';
import template from './chat-dialog-message.hbs?raw';
import Block from '../../../../utils/Block';

interface IChatDialogMessage {
    isOwner?: boolean,
    imgSrc?: string,
    text?: string,
    time: string
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
