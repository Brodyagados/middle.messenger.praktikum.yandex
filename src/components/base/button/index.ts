import Block from '../../../utils/Block';
import './button.scss';
import template from './button.hbs?raw';
import renderTemplate from '../../../utils/render-template';


interface IButton {
    class?: string,
    page?: string,
    disabled?: boolean,
    title?: string,
    img?: {
        src: string,
        alt: string
    },
    text: string
}

export class Button extends Block {
    constructor(props: IButton) {
        super('button', props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}
