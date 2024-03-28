import Block from '../../utils/Block';
import './textbox.scss';
import template from './textbox.hbs?raw';
import renderTemplate from '../../utils/render-template';
import { Input } from '..';
import { IInput } from '../base/input';


interface ITextBox extends IInput {
    class?: string,
    label?: string,
    validation?: {
        type: string,
        error: string
    }
}

export class TextBox extends Block {
    constructor(props: ITextBox) {
        super(props);
        this._props = props;
    }

    render(): string {
        const { class: cssClass, label, validation, ...inputProps } = this._props;
        const context = {
            class: cssClass,
            label,
            input: new Input({ ...inputProps, validationType: validation?.type } as IInput).getContentAsString()
        };

        return renderTemplate(template, context);
    }
}
