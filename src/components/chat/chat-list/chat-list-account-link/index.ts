import './chat-list-account-link.scss';
import template from './chat-list-account-link.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import { ILink, Link } from '../../../base/link';
import Block from '../../../../utils/Block';


export class ChatListAccountLink extends Block {
    constructor() {
        super('div');
    }

    render(): string {
        const context = {
            link: new Link({ text: 'Профиль', page: '/user-setting' }).render()
        };

        return renderTemplate(template, context);
    }
}
