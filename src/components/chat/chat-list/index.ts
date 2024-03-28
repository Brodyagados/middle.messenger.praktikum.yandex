import './chat-list.scss';
import Block from '../../../utils/Block';
import template from './chat-list.hbs?raw';
import renderTemplate from '../../../utils/render-template';
export { ChatListAccountLink } from './chat-list-account-link';
export { ChatListHeader } from './chat-list-header';
export { ChatListItem } from './chat-list-item';


export interface IChatList {
    accountLink: string,
    header: string,
    items: string
}

export class ChatList extends Block {
    constructor(props: IChatList) {
        super(props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}
