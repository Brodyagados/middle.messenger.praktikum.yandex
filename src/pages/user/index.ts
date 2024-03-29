import { DialogFooter, DialogHeader, DialogMain } from '../../components';
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
    header?: Block[],
    main: Block[],
    footer: Block[]
}

export class UserPage extends Block {
  constructor(props: IUserPage) {
    const { header, main, footer } = props;

    super({
      header: header ? new DialogHeader({ content: Object.values(header) }) : null,
      main: new DialogMain({ content: Object.values(main) }),
      footer: new DialogFooter({ content: Object.values(footer) }),
      attr: { class: 'user-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
