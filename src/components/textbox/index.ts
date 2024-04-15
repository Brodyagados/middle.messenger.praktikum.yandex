import Block from '../../utils/Block';
import './textbox.scss';
import template from './textbox.hbs?raw';
import { Validation } from '../../utils/ValidationType';
import { IInput, UserSettingInput } from '../base/input';

interface ITextBox {
  label?: string,
  inputProps: IInput,
  attr?: {
    class?: string
  }
}

export class TextBox extends Block {
  constructor(props: ITextBox) {
    const { label, inputProps: { attr: { validation, name: field } }, attr } = props;
    const cssClass = attr?.class;

    super({
      label,
      error: validation ? Validation.getByType(validation)?.message : '',
      input: new (UserSettingInput(field))({ ...props.inputProps }),
      attr: { class: `textbox ${cssClass}` },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
