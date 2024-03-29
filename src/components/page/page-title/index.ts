import Block from '../../../utils/Block';
import './page-title.scss';
import template from './page-title.hbs?raw';

interface IPageTitle {
    text: string
}

export class PageTitle extends Block {
  constructor(props: IPageTitle) {
    super({
      ...props,
      attr: { class: 'page__title' },
    }, 'h1');
  }

  render() {
    return this.compile(template, this._props);
  }
}
