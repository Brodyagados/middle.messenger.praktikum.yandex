import './chat-list-header.scss';
import template from './chat-list-header.hbs?raw';
import Block from '../../../../utils/Block';
import { ChatListSearch } from '../chat-list-search';

export class ChatListHeader extends Block {
  constructor() {
    super({
      search: new ChatListSearch({ attr: { placeholder: 'Поиск', name: 'search' } }),
      attr: { class: 'chat-list__header' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
