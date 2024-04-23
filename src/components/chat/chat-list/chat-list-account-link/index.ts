import './chat-list-account-link.scss';
import template from './chat-list-account-link.hbs?raw';
import { Link } from '../../../base/link';
import Block from '../../../../utils/Block';
import Router from '../../../../utils/Router';
import { PAGE_PATH } from '../../../../constants/PagePath';

export class ChatListAccountLink extends Block {
  constructor() {
    super({
      link: new Link({
        text: 'Профиль',
        events: {
          click: (event: Event) => {
            event.preventDefault();

            const router = new Router('#app');
            router.go(PAGE_PATH.userSetting);
          },
        },
      }),
      attr: { class: 'chat-list__account-link' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
