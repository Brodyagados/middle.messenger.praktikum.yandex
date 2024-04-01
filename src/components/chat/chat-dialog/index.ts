import './chat-dialog.scss';
import Block from '../../../utils/Block';
import template from './chat-dialog.hbs?raw';
import { DialogFooter, DialogHeader, DialogMain } from '../../../components';

export { ChatDialogInput } from './chat-dialog-input';
export { ChatDialogMessage } from './chat-dialog-message';
export { ChatDialogUser } from './chat-dialog-user';

export interface IChatDialog {
  header: Block[],
  main: Block[],
  footer: Block[]
}

export class ChatDialog extends Block {
  constructor(props: IChatDialog) {
    const { header, main, footer } = props;

    super({
      header: new DialogHeader({ content: Object.values(header) }),
      main: new DialogMain({ content: Object.values(main) }),
      footer: new DialogFooter({ content: Object.values(footer) }),
      attr: { class: 'chat-dialog' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
