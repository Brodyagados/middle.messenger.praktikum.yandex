import Block from '../../../utils/Block';
import './dialog-main.scss';
import template from './dialog-main.hbs?raw';

interface IDialogMain {
  content: Block[]
}

export class DialogMain extends Block {
  constructor(props: IDialogMain) {
    super({
      ...props,
      attr: { class: 'dialog__main' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
