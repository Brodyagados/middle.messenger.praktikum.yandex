import { Form, Link } from '../../components';
import './user-page.scss';
import Block from '../../utils/Block';
import template from './user-page.hbs?raw';
import Router from '../../utils/Router';
import { PAGE_PATH } from '../../constants/PagePath';

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
      chatsLink: new Link({
        text: 'Назад к чатам',
        attr: { class: 'link_back' },
        events: {
          click: (event: Event) => {
            event.preventDefault();

            const router = new Router('#app');
            router.go(PAGE_PATH.messenger);
          },
        },
      }),
      form: new Form({ content: form }),
      attr: { class: 'user-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
