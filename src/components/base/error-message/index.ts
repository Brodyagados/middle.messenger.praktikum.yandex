import Block from '../../../utils/Block';
import './error-message.scss';
import template from './error-message.hbs?raw';

export interface IErrorMessage {
  text: string,
  attr?: {
    class?: string,
  }
}

export class ErrorMessage extends Block {
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
