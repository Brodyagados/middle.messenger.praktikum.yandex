import './chat-list-search.scss';
import template from './chat-list-search.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import { IInput, Input } from '../../../base/input';
import Block from '../../../../utils/Block';

export class ChatListSearch extends Block {
  constructor(props: IInput) {
    super(props);
    this._props = props;
  }

  render(): string {
    const context = {
      input: new Input(this._props as IInput).getContentAsString(),
    };

    return renderTemplate(template, context);
  }
}
