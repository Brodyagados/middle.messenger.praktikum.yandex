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
     */
    static getByPath(path: string) {
        return Object.values(page).find((p) => p.path === path);
    }
}

/** Страница */
export const page = {
    /** Страница "Чаты" */
    home: new Page('/', Pages.ChatPage),
    /** Страница "Авторизация" */
    login: new Page('/login', Pages.LoginPage),
    /** Страница "Регистрация" */
    signIn: new Page('/sign-in', Pages.SignInPage),
    /** Страница "Ошибка 404" */
    notFound: new Page('/not-found', Pages.NotFoundErrorPage),
    /** Страница "Ошибка 500" */
    internalServerError: new Page('/internal-server-error', Pages.InternalServerErrorPage),
    /** Страница "Настройки пользователя" */
    userSetting: new Page('/user-setting', Pages.UserSettingPage)
}
