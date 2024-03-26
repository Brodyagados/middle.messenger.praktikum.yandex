import './chat-list-header.scss';
import template from './chat-list-header.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import Block from '../../../../utils/Block';
import { ChatListSearch } from '..';


export class ChatListHeader extends Block {
    constructor(props: never) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        const context = {
            search: new ChatListSearch({ placeholder: 'Поиск', name: 'search' }).render()
        };

        return renderTemplate(template, context);
    }
}
