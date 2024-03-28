import Block from '../../../utils/Block';
import './link.scss';
import template from './link.hbs?raw';
import renderTemplate from '../../../utils/render-template';


export interface ILink {
    url?: string,
    class?: string,
    page?: string,
    text: string
}

export class Link extends Block {
    constructor(props: ILink) {
        super(props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}
