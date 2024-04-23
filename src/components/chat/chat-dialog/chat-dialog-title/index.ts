import './chat-dialog-title.scss';
import template from './chat-dialog-title.hbs?raw';
import Block from '../../../../utils/Block';
import { connect } from '../../../../utils/HOC';
import { Indexed } from '../../../../utils/utils';

interface IChatDialogTitle {
  text: string
}

class ChatDialogTitle extends Block {
  constructor(props: IChatDialogTitle) {
    super({
      ...props,
      attr: { class: 'chat-dialog__title' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}

export const StoredChatDialogTitle = connect(ChatDialogTitle, (state: Indexed) => {
  return {
    text: state.chatPage.current?.title,
  };
});
