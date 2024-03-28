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
                new Avatar({ alt: 'Аватар пользователя.' }).getContentAsString(),
                new PageTitle({ text: firstName }).getContentAsString()
            ],
            main: [
                new TextBox({ label: 'Почта', name: 'email', value: email, ...textBoxProps }).getContentAsString(),
                new TextBox({ label: 'Логин', name: 'login', value: login, ...textBoxProps }).getContentAsString(),
                new TextBox({ label: 'Имя', name: 'first_name', value: firstName, ...textBoxProps }).getContentAsString(),
                new TextBox({ label: 'Фамилия', name: 'second_name', value: secondName, ...textBoxProps }).getContentAsString(),
                new TextBox({ label: 'Телефон', name: 'phone', value: phone, ...textBoxProps }).getContentAsString()
            ],
            footer: [
                new Link({ text: 'Изменить данные', page: '/user-setting-edit' }).getContentAsString(),
                new Link({ text: 'Изменить пароль', page: '/change-password' }).getContentAsString(),
                new Link({ class: 'link_color_red', text: 'Выйти', page: '/login' }).getContentAsString()
            ]
        }
    };

    return new UserPage(context(userData)).getContent();
};
