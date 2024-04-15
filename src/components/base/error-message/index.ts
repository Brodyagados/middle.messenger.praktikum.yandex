import Block from '../../../utils/Block';
import './error-message.scss';
import template from './error-message.hbs?raw';
import { Indexed } from '../../../utils/utils';
import { connect } from '../../../utils/HOC';

export interface IErrorMessage {
  text: string,
  attr?: {
    class?: string,
  }
}

class ErrorMessage extends Block {
  constructor(props: IErrorMessage) {
    const { attr } = props;

    super({
      ...props,
      attr: {
        ...props.attr,
        class: `error-message ${attr?.class ?? ''}`,
      },
    }, 'div');
  }

  render() {
    return this.compile(template, this._props);
  }
}

export enum ERROR_MESSAGE_TYPE {
  signUpPage,
  loginPage,
  changePasswordPage
}

export default (type: ERROR_MESSAGE_TYPE) => (
  connect(ErrorMessage, (state: Indexed) => {
    switch (type) {
      case ERROR_MESSAGE_TYPE.signUpPage:
        return { text: state.signUpPage.error };
      case ERROR_MESSAGE_TYPE.loginPage:
        return { text: state.loginPage.error };
      case ERROR_MESSAGE_TYPE.changePasswordPage:
        return { text: state.changePasswordPage.error };
      default: return {};
    }
  })
);
