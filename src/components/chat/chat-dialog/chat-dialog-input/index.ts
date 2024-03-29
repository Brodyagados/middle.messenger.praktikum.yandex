import './chat-dialog-input.scss';
import template from './chat-dialog-input.hbs?raw';
import { IInput, Input } from '../../../base/input';
import Block from '../../../../utils/Block';

export class ChatDialogInput extends Block {
  constructor(props: IInput) {
    super({
      input: new Input(props),
      attr: { class: 'chat-dialog__input' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
