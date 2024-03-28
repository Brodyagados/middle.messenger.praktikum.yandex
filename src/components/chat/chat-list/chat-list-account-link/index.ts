import './chat-list-account-link.scss';
import template from './chat-list-account-link.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import { Link } from '../../../base/link';
import Block from '../../../../utils/Block';

export class ChatListAccountLink extends Block {
  render(): string {
    const context = {
      link: new Link({ text: 'Профиль', page: '/user-setting' }).getContentAsString(),
    };

    return renderTemplate(template, context);
  }
}
