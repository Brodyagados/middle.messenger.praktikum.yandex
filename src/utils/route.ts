import testImgSrc from '../assets/icons/base-avatar.svg'
import * as Pages from '../pages';


/** Объект "Страница" */
export class Page {
    /** ссылка на страницу */
    path: string;
    /** контент страницы */
    content: (context?: object) => HTMLElement | undefined;

    constructor(path: string, content: (context?: object) => HTMLElement | undefined) {
        this.path = path;
        this.content = content;
    };

    /** 
     * Метод перехода на страницу
     * @param {object} context контекст
     */
    route(context: object = {}) {
        const content = this.content(context);
        if (!content) {
            return;
        }

        const app = document.getElementById('app');
        app!.replaceChildren(content);
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

// TODO: Тестовые данные. Убрать после реализации работы с API
const testData = {
    user: {
        email: 'pochta@yandex.ru',
        login: 'ivanivanov',
        firstName: 'Иван',
        secondName: 'Иванов',
        phone: '+7 (909) 967 30 30'
    },
    chats: [
        { user: 'Андрей', message: 'Изображение', count: '2', date: '10:49' },
        { user: 'Киноклуб', message: 'стикер', isOwner: true, date: '12:00' },
        { user: 'Илья', message: 'Друзья, у меня для вас особенный выпуск новостей! Дополнительный большой текст', count: '4', date: '15:12' },
        { user: 'Вадим', message: 'Круто!', isOwner: true, isActive: true, date: 'Пт' }
    ],
    chatDialogMessages: [
        {
            time: '11:56',
            text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА'
                + ' в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.'
                + ' Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все'
                + ' тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой'
                + ' забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса,'
                + ' но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено'
                + ' 25 штук, одну из них недавно продали на аукционе за 45000 евро.'
        },
        { time: '11:56', imgSrc: testImgSrc },
        { time: '12:00', text: 'Круто!', isOwner: true }
    ]
};

/** Страница */
export const page = {
    home: new Page('/', () => Pages.ChatPage(testData.chats, testData.chatDialogMessages)),
    login: new Page('/login', Pages.LoginPage),
    signIn: new Page('/sign-in', Pages.SignInPage),
    notFound: new Page('/not-found', Pages.NotFoundErrorPage),
    internalServerError: new Page('/internal-server-error', Pages.InternalServerErrorPage),
    userSetting: new Page('/user-setting', () => Pages.UserSettingPage(testData.user)),
    userSettingEdit: new Page('/user-setting-edit', () => Pages.UserSettingEditPage(testData.user)),
    changePassword: new Page('/change-password', Pages.ChangePasswordPage)
}
