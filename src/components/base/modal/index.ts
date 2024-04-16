import Block from '../../../utils/Block';
import template from './modal.hbs?raw';

interface IModal {
  content: Block[]
}

export class Modal extends Block {
  constructor(props: IModal) {
    super(props, 'dialog');
  }

  render() {
    return this.compile(template, this._props);
  }
}
