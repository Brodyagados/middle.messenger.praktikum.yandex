import Block from '../../../utils/Block';
import { Validation } from '../../../utils/ValidationType';
import { Page } from '../../../utils/route';
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
          const { target: form, submitter } = e;

          e.preventDefault();
          const isValid = Validation.validateForm(form as HTMLFormElement);

          if (!isValid || !submitter) {
            return;
          }

          const path = submitter.getAttribute('page');
          if (path) {
            Page.getByPath(path)?.route();
          }
        },
      },
    }, 'form');
  }

  render() {
    return this.compile(template, this._props);
  }
}
