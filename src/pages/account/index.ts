import './account-page.scss';
import Block from '../../utils/Block';
import template from './account-page.hbs?raw';
import renderTemplate from '../../utils/render-template';
import { DialogFooter, DialogHeader, DialogMain } from '../../components';

export { LoginPage } from './login-page';
export { SignInPage } from './sign-in-page';

interface IAccountPage {
    header: string[],
    main: string[],
    footer: string[]
}

export class AccountPage extends Block {
  constructor(props: IAccountPage) {
    super(props);
    this._props = props;
  }

  render(): string {
    const { header, main, footer } = this._props;
    const context = {
      header: new DialogHeader({ content: Object.values(header).join('') }).getContentAsString(),
      main: new DialogMain({ content: Object.values(main).join('') }).getContentAsString(),
      footer: new DialogFooter({ content: Object.values(footer).join('') }).getContentAsString(),
    };

    return renderTemplate(template, context);
  }
}
