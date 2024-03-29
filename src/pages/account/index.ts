import './account-page.scss';
import Block from '../../utils/Block';
import template from './account-page.hbs?raw';
import { DialogFooter, DialogHeader, DialogMain } from '../../components';

export { LoginPage } from './login-page';
export { SignInPage } from './sign-in-page';

interface IAccountPage {
  header?: Block[],
  main: Block[],
  footer: Block[]
}

export class AccountPage extends Block {
  constructor(props: IAccountPage) {
    const { header, main, footer } = props;

    super({
      header: header ? new DialogHeader({ content: Object.values(header) }) : null,
      main: new DialogMain({ content: Object.values(main) }),
      footer: new DialogFooter({ content: Object.values(footer) }),
      attr: { class: 'account-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
