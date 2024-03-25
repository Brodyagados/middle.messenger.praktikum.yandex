import Block from '../../utils/Block';
import './page-description.scss';
import template from './page-description.hbs?raw';
import renderTemplate from '../../utils/render-template';


interface IPageDescription {
    text: string
}

export class PageDescription extends Block {
    constructor(props: IPageDescription) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}
