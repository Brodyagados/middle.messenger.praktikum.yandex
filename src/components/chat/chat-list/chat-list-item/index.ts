import './chat-list-item.scss';
import template from './chat-list-item.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import Block from '../../../../utils/Block';
import { Avatar } from '../../..';


interface IChatListItem {
    isActive?: boolean,
    avatarSrc?: string,
    user: string,
    isOwner?: boolean,
    message: string,
    date: string,
    count?: string
}

export class ChatListItem extends Block {
    constructor(props: IChatListItem) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        const { avatarSrc, ...itemProps } = this._props;
        const context = {
            ...itemProps,
            avatar: new Avatar({ src: avatarSrc, alt: 'Аватар чата.' })
        };

        return renderTemplate(template, context);
    }
}
