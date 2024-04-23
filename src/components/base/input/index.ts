import Block from '../../../utils/Block';
import { connect } from '../../../utils/HOC';
import { Validation } from '../../../utils/ValidationType';
import { Indexed } from '../../../utils/utils';
import './input.scss';

export interface IInput {
  isAlignRight?: boolean,
  attr: {
    validation?: string,
    placeholder?: string,
    title?: string,
    disabled?: boolean,
    type?: string,
    value?: string,
    name: string,
  }
}

export class Input extends Block {
  constructor(props: IInput) {
    const { isAlignRight = false, attr } = props;
    const { value = '' } = attr;

    super({
      ...props,
      attr: {
        ...props.attr,
        value,
        class: `input${isAlignRight ? ' input_align_right' : ''}`,
      },
      events: props.attr.validation
        ? { blur: ({ target }: Event) => Validation.validateInput(target as HTMLInputElement) }
        : {},
    }, 'input');
  }

  render() {
    return this.compile('', this._props);
  }
}

export enum UserSettingInputField {
  login = 'login',
  firstName = 'first_name',
  secondName = 'second_name',
  phone = 'phone',
  email = 'email'
}

export const UserSettingInput = (field: string) => (
  connect(Input, (state: Indexed) => {
    switch (field) {
      case UserSettingInputField.login:
        return { attr: { value: state.user.login } };
      case UserSettingInputField.firstName:
        return { attr: { value: state.user.first_name } };
      case UserSettingInputField.secondName:
        return { attr: { value: state.user.second_name } };
      case UserSettingInputField.phone:
        return { attr: { value: state.user.phone } };
      case UserSettingInputField.email:
        return { attr: { value: state.user.email } };
      default: return {};
    }
  })
);
