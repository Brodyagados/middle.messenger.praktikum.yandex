import './error-page.scss';
import Block from '../../utils/Block';
import template from './error-page.hbs?raw';
import { DialogMain } from '../../components';

export { InternalServerErrorPage } from './internal-server-error-page';
export { NotFoundErrorPage } from './not-found-error-page';

interface IErrorPage {
    title: Block,
    description: Block,
    homeLink: Block
}

export class ErrorPage extends Block {
  constructor(props: IErrorPage) {
    super({
      main: new DialogMain({ content: Object.values(props) }),
      attr: { class: 'error-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
