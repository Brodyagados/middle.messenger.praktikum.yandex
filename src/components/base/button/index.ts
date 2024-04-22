import Block from '../../../utils/Block';
import './button.scss';
import template from './button.hbs?raw';

export interface IButton {
  text?: string,
  img?: {
    src: string,
    alt: string
  },
  attr: {
    class?: string,
    page?: string,
    disabled?: boolean,
    title?: string,
    type?: string,
    'data-type'?: string
  },
  events: Record<string, unknown>
}

export class Button extends Block {
  constructor(props: IButton) {
    const { attr: { class: cssClass = '' } } = props;

    super({
      ...props,
      attr: {
        ...props.attr,
        class: `button ${cssClass}`,
      },
    }, 'button');
  }

  render() {
    return this.compile(template, this._props);
  }
}
