import Block from '../../../utils/Block';
import './dialog-main.scss';
import template from './dialog-main.hbs?raw';

export class DialogMain extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
