import './chat-dialog.scss';
import Block from '../../../utils/Block';
import template from './chat-dialog.hbs?raw';
import renderTemplate from '../../../utils/render-template';
import { DialogFooter, DialogHeader, DialogMain } from '../../../components';


export interface IChatDialog {
    header: string[],
    main: string[],
    footer: string[]
}

export class ChatDialog extends Block {
    constructor(props: IChatDialog) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        const { header, main, footer } = this._props;
        const context = {
            header: new DialogHeader({ content: Object.values(header).join('') }).render(),
            main: new DialogMain({ content: Object.values(main).join('') }).render(),
            footer: new DialogFooter({ content: Object.values(footer).join('') }).render()
        };

        return renderTemplate(template, context);
    }
}
