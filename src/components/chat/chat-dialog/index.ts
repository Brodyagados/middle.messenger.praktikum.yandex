import './chat-dialog.scss';
import Block from '../../../utils/Block';
import template from './chat-dialog.hbs?raw';
import { DialogFooter, DialogHeader, DialogMain } from '../../../components';
import { connect } from '../../../utils/HOC';
import { Indexed } from '../../../utils/utils';

export { ChatDialogInput } from './chat-dialog-input';
export { ChatDialogMessage } from './chat-dialog-message';
export { StoredChatDialogTitle } from './chat-dialog-title';

export interface IChatDialog {
  visible: boolean,
  header: Block[],
  main: Block[],
  footer: Block[]
}

class ChatDialog extends Block {
  constructor(props: IChatDialog) {
    const { visible, header, main, footer } = props;

    super({
      header: new DialogHeader({ content: header }),
      main: new DialogMain({ content: main }),
      footer: new DialogFooter({ content: footer }),
      attr: { class: `chat-dialog${visible ? ' chat-dialog_visible' : ''}` },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}

export const StoredChatDialog = connect(ChatDialog, (state: Indexed) => {
  return {
    visible: state.chatPage.current?.hasOwnProperty('id'),
  };
});
