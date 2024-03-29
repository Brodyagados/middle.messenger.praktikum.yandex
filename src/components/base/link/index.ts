import Block from '../../../utils/Block';
import './link.scss';
import template from './link.hbs?raw';

export class Link extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
