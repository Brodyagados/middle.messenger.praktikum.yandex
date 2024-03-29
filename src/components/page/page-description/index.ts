import Block from '../../../utils/Block';
import './page-description.scss';
import template from './page-description.hbs?raw';

export class PageDescription extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
