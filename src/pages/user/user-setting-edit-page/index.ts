import { Avatar, Button, TextBox } from '../../../components';
import { IUserData, UserPage } from '..';


const context = (userData: IUserData) => {
    const { 
        firstName, secondName, 
        email, login, phone
    } = userData;
    const textBoxProps = { class: 'textbox_inline' };

    return {
        header: [
            new Avatar({ alt: 'Аватар пользователя.' }).render()
        ],
        main: [
            new TextBox({ label: 'Почта', name: 'email', value: email, ...textBoxProps }).render(),
            new TextBox({ label: 'Логин', name: 'login', value: login, ...textBoxProps }).render(),
            new TextBox({ label: 'Имя', name: 'first_name', value: firstName, ...textBoxProps }).render(),
            new TextBox({ label: 'Фамилия', name: 'second_name', value: secondName, ...textBoxProps }).render(),
            new TextBox({ label: 'Телефон', name: 'phone', value: phone, ...textBoxProps }).render()
        ],
        footer: [
            new Button({ class: 'button_color_blue button_text_center', text: 'Сохранить', page: '/user-setting' }).render()
        ]
    }
};

export const UserSettingEditPage = (userData: IUserData) => (
    new UserPage(context(userData)).getContent()
);
