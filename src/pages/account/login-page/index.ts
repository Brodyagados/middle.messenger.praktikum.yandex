import { AccountPage } from '..';
import { Button, Link, PageTitle, TextBox } from '../../../components';


const context = {
    header: [
        new PageTitle({ text: 'Вход' }).render()
    ],
    main: [
        new TextBox({ 
            label: 'Логин', placeholder: 'Логин', name: 'login',
            events: { focus: () => console.log('login textbox focus') }
        }).render(),
        new TextBox({ 
            label: 'Пароль', placeholder: 'Пароль', name: 'password', type: 'password',
            events: { focus: () => console.log('password textbox focus') }
        }).render()
    ],
    footer: [
        new Button({ 
            class: 'button_color_blue', text: 'Войти', page: '/', 
            events: { click: () => console.log('button click') } 
        }).render(),
        new Link({ text: 'Зарегистрироваться', page: '/sign-in' }).render()
    ]
};

export const LoginPage = () => (
    new AccountPage(context).getContent()
);
