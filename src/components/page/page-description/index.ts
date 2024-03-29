import Block from '../../../utils/Block';
import './page-description.scss';
import template from './page-description.hbs?raw';

interface IPageDescription {
  text: string
}

export class PageDescription extends Block {
  constructor(props: IPageDescription) {
    super({
      ...props,
      attr: { class: 'page__description' }
    }, 'h2');
  }
  
  render() {
    return this.compile(template, this._props);
  }
}
