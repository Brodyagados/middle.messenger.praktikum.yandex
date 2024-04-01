import './chat-list-search.scss';
import template from './chat-list-search.hbs?raw';
import { IInput, Input } from '../../../base/input';
import Block from '../../../../utils/Block';

export class ChatListSearch extends Block {
  constructor(props: IInput) {
    super({
      input: new Input(props),
      attr: { class: 'chat-list__search' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
