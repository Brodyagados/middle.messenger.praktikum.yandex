import './chat-list.scss';
import Block from '../../../utils/Block';
import template from './chat-dialog.hbs?raw';
import renderTemplate from '../../../utils/render-template';
import { DialogFooter, DialogHeader, DialogMain } from '../../../components';
import { ChatListItem } from './chat-list-item';


interface IChatList {
    accountLink: string,
    header: string,
    items: string[]
}

export class ChatList extends Block {
    constructor(props: IChatList) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}
