import './chat-dialog-user.scss';
import template from './chat-dialog-user.hbs?raw';
import Block from '../../../../utils/Block';

interface IChatDialogUser {
  text: string
}

export class ChatDialogUser extends Block {
  constructor(props: IChatDialogUser) {
    super({
      ...props,
      attr: { class: 'chat-dialog__user' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
