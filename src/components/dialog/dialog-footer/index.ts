import Block from '../../../utils/Block';
import './dialog-footer.scss';
import template from './dialog-footer.hbs?raw';

export class DialogFooter extends Block {
  render() {
    return this.compile(template, this._props);
  }
}
