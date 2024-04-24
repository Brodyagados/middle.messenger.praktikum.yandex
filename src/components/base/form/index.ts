import Block from '../../../utils/Block';
import { Validation } from '../../../utils/ValidationType';
import template from './form.hbs?raw';

interface IForm {
  content: Block[]
}

export class Form extends Block {
  constructor(props: IForm) {
    super({
      ...props,
      events: {
        submit: (e: SubmitEvent) => {
          const { target: form } = e;

          e.preventDefault();
          Validation.validateForm(form as HTMLFormElement);
        },
      },
    }, 'form');
  }

  render() {
    return this.compile(template, this._props);
  }
}
