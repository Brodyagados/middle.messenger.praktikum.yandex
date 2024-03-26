import './chat-dialog-message.scss';
import template from './chat-dialog-message.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import Block from '../../../../utils/Block';


interface IChatDialogMessage {
    isOwner?: boolean,
    imgSrc?: string,
    text?: string,
    time: string
}

export class ChatDialogMessage extends Block {
    constructor(props: IChatDialogMessage) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}