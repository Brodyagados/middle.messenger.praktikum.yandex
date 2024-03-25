import './error-page.scss';
import Block from '../../utils/Block';
import template from './error-page.hbs?raw';
import renderTemplate from '../../utils/render-template';
import { DialogMain } from '../../components';

export { InternalServerErrorPage } from './internal-server-error-page';
export { NotFoundErrorPage } from './not-found-error-page';


interface IErrorPage {
    title: string,
    description: string,
    homeLink: string
}

export class ErrorPage extends Block {
    constructor(props: IErrorPage) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        const context = {
            dialogMain: new DialogMain({ content: Object.values(this._props).join('') }).render()
        };

        return renderTemplate(template, context);
    }
}
