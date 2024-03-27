import { AccountPage } from '..';
import { Button, Link, PageTitle, TextBox } from '../../../components';


const context = {
    header: [
        new PageTitle({ text: 'Регистрация' }).render()
    ],
    main: [
        new TextBox({ label: 'Почта', placeholder: 'Почта', name: 'email' }).render(),
        new TextBox({ label: 'Логин', placeholder: 'Логин', name: 'login' }).render(),
        new TextBox({ label: 'Имя', placeholder: 'Имя', name: 'first_name' }).render(),
        new TextBox({ label: 'Фамилия', placeholder: 'Фамилия', name: 'second_name' }).render(),
        new TextBox({ label: 'Телефон', placeholder: 'Телефон', name: 'phone' }).render(),
        new TextBox({ label: 'Пароль', placeholder: 'Пароль', name: 'password', type: 'password' }).render(),
        new TextBox({ label: 'Пароль еще раз', placeholder: 'Пароль еще раз', name: 'password_equal', type: 'password' }).render()
    ],
    footer: [
        new Button({ class: 'button_color_blue', text: 'Зарегистрироваться', page: '/login' }).render(),
        new Link({ text: 'Войти', page: '/login' }).render()
    ]
};

export const SignInPage = () => (
    new AccountPage(context).getContent()
);
