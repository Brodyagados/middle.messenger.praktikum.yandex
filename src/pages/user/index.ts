import { Form } from '../../components';
import './user-page.scss';
import Block from '../../utils/Block';
import template from './user-page.hbs?raw';

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
