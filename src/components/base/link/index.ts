import Block from '../../../utils/Block';
import './link.scss';
import template from './link.hbs?raw';

export interface ILink {
  text: string,
  attr: {
    href?: string,
    class?: string,
    page?: string,
  },
  events: Record<string, unknown>
}

export class Link extends Block {
  constructor(props: ILink) {
    const { attr: { class: cssClass = '', href = '' } } = props;

    super({
      ...props,
      attr: { ...props.attr, href, class: `link ${cssClass}` },
    }, 'a');
  }

  render() {
    return this.compile(template, this._props);
  }
}
