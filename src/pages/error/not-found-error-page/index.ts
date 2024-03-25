import Block from '../../../utils/Block';
import template from './not-found-error-page.hbs?raw';
import renderTemplate from '../../../utils/render-template';


interface INotFoundErrorPage {
    title: string,
    description: string,
    homeLink: string
}

export class NotFoundErrorPage extends Block {
    constructor(props: INotFoundErrorPage) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}
