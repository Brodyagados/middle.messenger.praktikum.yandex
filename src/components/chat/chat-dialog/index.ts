import './chat-dialog.scss';
import Block from '../../../utils/Block';
import template from './chat-dialog.hbs?raw';
import {
  ChatDialogMessage, DialogFooter,
  DialogHeader, DialogMain
} from '../../../components';
import { connect } from '../../../utils/HOC';
import { Indexed } from '../../../utils/utils';
import { IChatDialogMessage } from './chat-dialog-message';

export { ChatDialogInput } from './chat-dialog-input';
export { ChatDialogMessage } from './chat-dialog-message';
export { StoredChatDialogTitle } from './chat-dialog-title';

export interface IChatDialog {
  header: Block[],
  main: Block,
  footer: Block[],
  attr: Record<string, unknown>
}

class ChatDialog extends Block {
  constructor(props: IChatDialog) {
    const { attr, header, main, footer } = props;

    super({
      header: new DialogHeader({ content: header }),
      main,
      footer: new DialogFooter({ content: footer }),
      attr,
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}

export const StoredChatDialog = connect(ChatDialog, (state: Indexed) => {
  return {
    attr: { class: `chat-dialog${state.chatPage.current?.hasOwnProperty('id') ? ' chat-dialog_visible' : ''}` },
    main: new DialogMain({
      content: state.chatPage.messages.map((message: IChatDialogMessage) => (
        new ChatDialogMessage(message)
      ))
    }),
  };
});
