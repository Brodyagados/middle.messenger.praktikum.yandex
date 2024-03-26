import './chat-dialog-input.scss';
import template from './chat-dialog-input.hbs?raw';
import renderTemplate from '../../../../utils/render-template';
import { IInput, Input } from '../../../base/input';
import Block from '../../../../utils/Block';


export class ChatDialogInput extends Block {
    constructor(props: IInput) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        const context = {
            input: new Input({ placeholder: 'Сообщение', name: 'message' }).render()
        };

        return renderTemplate(template, context);
    }
}
