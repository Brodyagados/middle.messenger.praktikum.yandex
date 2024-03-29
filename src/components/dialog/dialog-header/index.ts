import Block from '../../../utils/Block';
import './dialog-header.scss';
import template from './dialog-header.hbs?raw';

interface IDialogHeader {
  content: Block[]
}

export class DialogHeader extends Block {
  constructor(props: IDialogHeader) {
    super({
      ...props,
      attr: { class: 'dialog__header' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
