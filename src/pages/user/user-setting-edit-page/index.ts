import { Avatar, Button, TextBox } from '../../../components';
import { IUserData, UserPage } from '..';


export const UserSettingEditPage = (userData: IUserData) => {
    const context = (userData: IUserData) => {
        const {
            firstName, secondName,
            email, login, phone
        } = userData;
        const textBoxProps = { class: 'textbox_inline' };

        return {
            header: [
                new Avatar({ alt: 'Аватар пользователя.' }).getContentAsString()
            ],
            main: [
                new TextBox({ label: 'Почта', name: 'email', value: email, ...textBoxProps }).getContentAsString(),
                new TextBox({ label: 'Логин', name: 'login', value: login, ...textBoxProps }).getContentAsString(),
                new TextBox({ label: 'Имя', name: 'first_name', value: firstName, ...textBoxProps }).getContentAsString(),
                new TextBox({ label: 'Фамилия', name: 'second_name', value: secondName, ...textBoxProps }).getContentAsString(),
                new TextBox({ label: 'Телефон', name: 'phone', value: phone, ...textBoxProps }).getContentAsString()
            ],
            footer: [
                new Button({ class: 'button_color_blue button_text_center', text: 'Сохранить', page: '/user-setting' }).getContentAsString()
            ]
        }
    };

    return new UserPage(context(userData)).getContentAsString();
};
