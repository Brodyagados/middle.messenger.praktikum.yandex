import Handlebars from 'handlebars';

import * as Pages from '../pages';

/** Объект "Страница" */
export class Page {
    /** ссылка на страницу */
    path: string;
    /** шаблон страницы */
    template: string;

    constructor(path: string, template: string) {
        this.path = path;
        this.template = template;
    };

    /** 
     * Метод перехода на страницу
     * @param {object} context контекст
     */
    route(context: object = {}) {
        const app = document.getElementById('app');
        const template = Handlebars.compile(this.template);

        app!.innerHTML = template(context);
    }

    /** 
     * Метод получения страницы по ее ссылке
     * @param {string} path ссылка на страницу
     * @returns {Page?} страница
     */
    static getByPath(path: string) {
        return Object.values(page).find((p) => p.path === path);
    }
}

/** Страница */
export const page = {
    home: new Page('/', Pages.ChatPage),
    login: new Page('/login', Pages.LoginPage),
    signIn: new Page('/sign-in', Pages.SignInPage),
    notFound: new Page('/not-found', Pages.NotFoundErrorPage),
    internalServerError: new Page('/internal-server-error', Pages.InternalServerErrorPage),
    userSetting: new Page('/user-setting', Pages.UserSettingPage)
}
