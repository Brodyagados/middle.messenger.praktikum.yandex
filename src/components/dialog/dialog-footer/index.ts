import Block from '../../../utils/Block';
import './dialog-footer.scss';
import template from './dialog-footer.hbs?raw';

interface IDialogFooter {
  content: Block[]
}

export class DialogFooter extends Block {
  constructor(props: IDialogFooter) {
    super({
      ...props,
      attr: { class: 'dialog__footer'}
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
