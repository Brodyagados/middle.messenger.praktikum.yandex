import { AccountPage } from '..';
import { Button, Link, PageTitle, TextBox } from '../../../components';


export const LoginPage = () => {
    const context = {
        header: [
            new PageTitle({ text: 'Вход' }).getContentAsString()
        ],
        main: [
            new TextBox({ label: 'Логин', placeholder: 'Логин', name: 'login' }).getContentAsString(),
            new TextBox({
                label: 'Пароль', placeholder: 'Пароль',
                name: 'password', type: 'password'
            }).getContentAsString()
        ],
        footer: [
            new Button({ class: 'button_color_blue', text: 'Войти', page: '/' }).getContentAsString(),
            new Link({ text: 'Зарегистрироваться', page: '/sign-in' }).getContentAsString()
        ]
    };

    return new AccountPage(context).getContentAsString();
};
