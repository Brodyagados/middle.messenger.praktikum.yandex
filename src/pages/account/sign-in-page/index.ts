import { AccountPage } from '..';
import { Button, Link, PageTitle, TextBox } from '../../../components';


export const SignInPage = () => {
    const context = {
        header: [
            new PageTitle({ text: 'Регистрация' }).getContentAsString()
        ],
        main: [
            new TextBox({ label: 'Почта', placeholder: 'Почта', name: 'email' }).getContentAsString(),
            new TextBox({ label: 'Логин', placeholder: 'Логин', name: 'login' }).getContentAsString(),
            new TextBox({ label: 'Имя', placeholder: 'Имя', name: 'first_name' }).getContentAsString(),
            new TextBox({ label: 'Фамилия', placeholder: 'Фамилия', name: 'second_name' }).getContentAsString(),
            new TextBox({ label: 'Телефон', placeholder: 'Телефон', name: 'phone' }).getContentAsString(),
            new TextBox({ label: 'Пароль', placeholder: 'Пароль', name: 'password', type: 'password' }).getContentAsString(),
            new TextBox({ label: 'Пароль еще раз', placeholder: 'Пароль еще раз', name: 'password_equal', type: 'password' }).getContentAsString()
        ],
        footer: [
            new Button({ class: 'button_color_blue', text: 'Зарегистрироваться', page: '/login' }).getContentAsString(),
            new Link({ text: 'Войти', page: '/login' }).getContentAsString()
        ]
    };

    return new AccountPage(context).getContentAsString();
};
