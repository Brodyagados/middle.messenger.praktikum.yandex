import Block from '../../../utils/Block';
import './avatar.scss';
import baseSrc from '../../../assets/icons/base-avatar.svg';
import template from './avatar.hbs?raw';
import renderTemplate from '../../../utils/render-template';

interface IAvatar {
    src?: string,
    alt: string
}

export class Avatar extends Block {
  constructor(props: IAvatar) {
    super(props);
    this._props = props;
  }

  render(): string {
    const context = { ...this._props, src: this._props.src ?? baseSrc };
    return renderTemplate(template, context);
  }
}
