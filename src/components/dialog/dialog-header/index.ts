import Block from '../../../utils/Block';
import './dialog-header.scss';
import template from './dialog-header.hbs?raw';
import renderTemplate from '../../../utils/render-template';


interface IDialogHeader {
    content: string
}

export class DialogHeader extends Block {
    constructor(props: IDialogHeader) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}