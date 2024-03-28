import Block from '../../../utils/Block';
import './input.scss';
import template from './input.hbs?raw';
import renderTemplate from '../../../utils/render-template';


export interface IInput {
    isAlignRight?: boolean,
    placeholder?: string,
    title?: string,
    disabled?: boolean,
    value?: string,
    type?: string,
    name: string,
    validationType?: string
}

export class Input extends Block {
    constructor(props: IInput) {
        super(props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}
