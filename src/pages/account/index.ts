import './account-page.scss';
import Block from '../../utils/Block';
import template from './account-page.hbs?raw';
import { Form } from '../../components';

export { LoginPage } from './login-page';
export { SignInPage } from './sign-in-page';

interface IAccountPage {
  form: Block[]
}

export class AccountPage extends Block {
  constructor(props: IAccountPage) {
    const { form } = props;

    super({
      form: new Form({ content: form }),
      attr: { class: 'account-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
