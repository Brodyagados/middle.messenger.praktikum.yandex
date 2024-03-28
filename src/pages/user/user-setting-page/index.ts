import { Avatar, Link, PageTitle, TextBox } from '../../../components';
import { IUserData, UserPage } from '..';


export const UserSettingPage = (userData: IUserData) => {
    const context = (userData: IUserData) => {
        const {
            firstName, secondName,
            email, login, phone
        } = userData;
        const textBoxProps = { class: 'textbox_inline', disabled: true };

        return {
            header: [
                new Avatar({ alt: 'Аватар пользователя.' }).render(),
                new PageTitle({ text: firstName }).render()
            ],
            main: [
                new TextBox({ label: 'Почта', name: 'email', value: email, ...textBoxProps }).render(),
                new TextBox({ label: 'Логин', name: 'login', value: login, ...textBoxProps }).render(),
                new TextBox({ label: 'Имя', name: 'first_name', value: firstName, ...textBoxProps }).render(),
                new TextBox({ label: 'Фамилия', name: 'second_name', value: secondName, ...textBoxProps }).render(),
                new TextBox({ label: 'Телефон', name: 'phone', value: phone, ...textBoxProps }).render()
            ],
            footer: [
                new Link({ text: 'Изменить данные', page: '/user-setting-edit' }).render(),
                new Link({ text: 'Изменить пароль', page: '/change-password' }).render(),
                new Link({ class: 'link_color_red', text: 'Выйти', page: '/login' }).render()
            ]
        }
    };

    return new UserPage(context(userData)).getContent();
};
