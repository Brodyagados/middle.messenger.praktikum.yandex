import Block from '../../../utils/Block';
import './dialog-header.scss';
import template from './dialog-header.hbs?raw';

export class DialogHeader extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
