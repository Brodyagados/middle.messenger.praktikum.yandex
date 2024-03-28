import './chat-list-header.scss';
import template from './chat-list-header.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import Block from '../../../../utils/Block';
import { ChatListSearch } from '../chat-list-search';


export class ChatListHeader extends Block {
    render(): string {
        const context = {
            search: new ChatListSearch({ placeholder: 'Поиск', name: 'search' }).getContentAsString()
        };

        return renderTemplate(template, context);
    }
}
