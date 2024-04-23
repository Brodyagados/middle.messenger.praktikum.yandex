import Block from '../../../utils/Block';
import './dropdown-button.scss';
import template from './dropdown-button.hbs?raw';
import { Button } from '../button';

export interface IDropDownButton {
  button: Button,
  content: Block[]
}

export class DropDownButton extends Block {
  constructor(props: IDropDownButton) {
    super({
      ...props,
      attr: {
        class: 'dropdown',
      },
    }, 'div');
  }

  render() {
    return this.compile(template, this._props);
  }
}
