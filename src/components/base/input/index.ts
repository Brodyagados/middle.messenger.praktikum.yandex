import Block from '../../../utils/Block';
import { connect } from '../../../utils/HOC';
import { Validation } from '../../../utils/ValidationType';
import { Indexed } from '../../../utils/utils';
import './input.scss';

export interface IInput {
  isAlignRight?: boolean,
  value?: string,
  attr: {
    validation?: string,
    placeholder?: string,
    title?: string,
    disabled?: boolean,
    type?: string,
    name: string,
  }
}

export class Input extends Block {
  constructor(props: IInput) {
    const { isAlignRight = false, value = '' } = props;

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
        return { value: state.user.login };
      case UserSettingInputField.firstName:
        return { value: state.user.first_name };
      case UserSettingInputField.secondName:
        return { value: state.user.second_name };
      case UserSettingInputField.phone:
        return { value: state.user.phone };
      case UserSettingInputField.email:
        return { value: state.user.email };
      default: return {};
    }
  })
);
