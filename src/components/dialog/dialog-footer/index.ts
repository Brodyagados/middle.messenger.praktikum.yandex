import Block from '../../../utils/Block';
import './dialog-footer.scss';
import template from './dialog-footer.hbs?raw';
import renderTemplate from '../../../utils/render-template';

interface IDialogFooter {
    content: string
}

export class DialogFooter extends Block {
  constructor(props: IDialogFooter) {
    super(props);
    this._props = props;
  }

  render(): string {
    return renderTemplate(template, this._props);
  }
}
