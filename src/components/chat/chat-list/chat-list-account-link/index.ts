import './chat-list-account-link.scss';
import template from './chat-list-account-link.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import { ILink, Link } from '../../../base/link';
import Block from '../../../../utils/Block';


export class ChatListAccountLink extends Block {
    constructor(props: ILink) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        const context = {
            input: new Link(this._props as ILink).render()
        };

        return renderTemplate(template, context);
    }
}
