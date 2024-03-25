import Block from '../../../utils/Block';
import template from './dialog-main.hbs?raw';
import renderTemplate from '../../../utils/render-template';


interface IDialogMain {
    content: string
}

export class DialogMain extends Block {
    constructor(props: IDialogMain) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}