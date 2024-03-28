import Block from '../../../utils/Block';
import './page-title.scss';
import template from './page-title.hbs?raw';
import renderTemplate from '../../../utils/render-template';


interface IPageTitle {
    text: string
}

export class PageTitle extends Block {
    constructor(props: IPageTitle) {
        super(props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}
