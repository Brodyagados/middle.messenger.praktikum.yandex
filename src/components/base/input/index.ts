import Block from '../../../utils/Block';
import './input.scss';

export interface IInput {
    isAlignRight?: boolean,
    attr: {
      validation?: string,
      placeholder?: string,
      title?: string,
      disabled?: boolean,
      value?: string,
      type?: string,
      name: string,
    }
}

export class Input extends Block {
  constructor(props: IInput) {
    const { isAlignRight = false } = props;

    super({
      ...props,
      attr: {
        ...props.attr,
        class: `input${isAlignRight ? ' input_align_right' : ''}`,
      },
    }, 'input');
  }

  render() {
    return this.compile('', this._props);
  }
}
