import './chat-list-account-link.scss';
import template from './chat-list-account-link.hbs?raw';
import { Link } from '../../../base/link';
import Block from '../../../../utils/Block';

export class ChatListAccountLink extends Block {
  constructor() {
    super({
      link: new Link({ text: 'Профиль', attr: { page: '/user-setting' } }),
      attr: { class: 'chat-list__account-link' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
