import { DialogFooter, DialogHeader, DialogMain } from '../../components';
import './user-page.scss';
import Block from '../../utils/Block';
import template from './user-page.hbs?raw';
import renderTemplate from '../../utils/render-template';

export { ChangePasswordPage } from './change-password-page';
export { UserSettingPage } from './user-setting-page';


export interface IUserData {
    firstName: string,
    secondName: string,
    email: string,
    login: string,
    phone: string
}

interface IUserPage {
    header?: string[],
    main: string[],
    footer: string[]
}

export class UserPage extends Block {
    constructor(props: IUserPage) {
        super('div', props);
        this._props = props;
    }

    render(): string {
        const { header, main, footer } = this._props;
        const context = {
            header: header ? new DialogHeader({ content: Object.values(header).join('') }).render() : header,
            main: new DialogMain({ content: Object.values(main).join('') }).render(),
            footer: new DialogFooter({ content: Object.values(footer).join('') }).render()
        };

        return renderTemplate(template, context);
    }
}
