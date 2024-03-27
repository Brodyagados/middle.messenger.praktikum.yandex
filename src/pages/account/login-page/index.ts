import { AccountPage } from '..';
import { Button, Link, PageTitle, TextBox } from '../../../components';


const context = {
    header: [
        new PageTitle({ text: 'Вход' }).render()
    ],
    main: [
        new TextBox({ label: 'Логин', placeholder: 'Логин', name: 'login' }).render(),
        new TextBox({ label: 'Пароль', placeholder: 'Пароль', name: 'password', type: 'password' }).render()
    ],
    footer: [
        new Button({ class: 'button_color_blue', text: 'Войти', page: '/' }).render(),
        new Link({ text: 'Зарегистрироваться', page: '/sign-in' }).render()
    ]
};

export const LoginPage = () => (
    new AccountPage(context).getContent()
);
