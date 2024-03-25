import Block from '../../utils/Block';
import './textbox.scss';
import template from './textbox.hbs?raw';
import renderTemplate from '../../utils/render-template';
import { Input } from '..';
import { IInput } from '../base/input';


interface ITextBox {
    class?: string,
    label?: string,
    isAlignRight?: boolean,
    placeholder?: string,
    title?: string,
    disabled?: boolean,
    value?: string,
    type?: string,
    name: string
}

export class TextBox extends Block {
    constructor(props: ITextBox) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        const { class: cssClass, label, ...inputProps } = this._props;
        const context = {
            class: cssClass,
            label,
            input: new Input(inputProps as IInput).render()
        };

        return renderTemplate(template, context);
    }
}