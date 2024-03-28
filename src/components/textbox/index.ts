import Block from '../../utils/Block';
import './textbox.scss';
import template from './textbox.hbs?raw';
import renderTemplate from '../../utils/render-template';
import { Input } from '..';
import { IInput } from '../base/input';
import { Validation } from '../../utils/ValidationType';


interface ITextBox extends IInput {
    class?: string,
    label?: string,
    validationType?: string
}

export class TextBox extends Block {
    constructor(props: ITextBox) {
        super(props);
        this._props = props;
    }

    render(): string {
        const { class: cssClass, label, ...inputProps } = this._props;
        const error = Validation.getByType(inputProps.validationType)?.message;
        const context = {
            class: cssClass,
            label, error,
            input: new Input(inputProps as IInput).getContentAsString()
        };

        return renderTemplate(template, context);
    }
}
