import { Form } from '../../components';
import './user-page.scss';
import Block from '../../utils/Block';
import template from './user-page.hbs?raw';

export { ChangePasswordPage } from './change-password-page';
export { UserSettingPage } from './user-setting-page';
export { UserSettingEditPage } from './user-setting-edit-page';

export interface IUserData {
    firstName: string,
    secondName: string,
    email: string,
    login: string,
    phone: string
}

interface IUserPage {
  form: Block[]
}

export class UserPage extends Block {
  constructor(props: IUserPage) {
    const { form } = props;

    super({
      form: new Form({ content: form }),
      attr: { class: 'user-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
