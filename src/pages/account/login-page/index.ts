import { AccountPage } from '..';
import { Button, Link, PageTitle, TextBox } from '../../../components';
import { Validation, ValidationType } from '../../../utils/ValidationType';


export const LoginPage = () => {
    const context = {
        header: [
            new PageTitle({ text: 'Вход' }).getContentAsString()
        ],
        main: [
            new TextBox({
                label: 'Логин', placeholder: 'Логин', name: 'login',
                validationType: ValidationType.LOGIN
            }).getContentAsString(),
            new TextBox({
                label: 'Пароль', placeholder: 'Пароль',
                name: 'password', type: 'password',
                validationType: ValidationType.PASSOWRD
            }).getContentAsString()
        ],
        footer: [
            new Button({
                class: 'button_color_blue', text: 'Войти',
                page: '/', type: 'submit'
            }).getContentAsString(),
            new Link({ text: 'Зарегистрироваться', page: '/sign-in' }).getContentAsString()
        ]
    };

    const page = new AccountPage(context).getContent();
    const form = page.querySelector('form');
    Validation.formValidate(form);

    return page;
};
