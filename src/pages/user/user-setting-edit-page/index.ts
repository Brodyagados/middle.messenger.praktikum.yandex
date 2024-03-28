import { Avatar, Button, TextBox } from '../../../components';
import { IUserData, UserPage } from '..';
import { Validation, ValidationType } from '../../../utils/ValidationType';


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
                new TextBox({
                    label: 'Почта', name: 'email',
                    value: email, ...textBoxProps,
                    validationType: ValidationType.EMAIL
                }).getContentAsString(),
                new TextBox({
                    label: 'Логин', name: 'login',
                    value: login, ...textBoxProps,
                    validationType: ValidationType.LOGIN
                }).getContentAsString(),
                new TextBox({
                    label: 'Имя', name: 'first_name',
                    value: firstName, ...textBoxProps,
                    validationType: ValidationType.USER
                }).getContentAsString(),
                new TextBox({
                    label: 'Фамилия', name: 'second_name',
                    value: secondName, ...textBoxProps,
                    validationType: ValidationType.USER
                }).getContentAsString(),
                new TextBox({
                    label: 'Телефон', name: 'phone',
                    value: phone, ...textBoxProps,
                    validationType: ValidationType.PHONE
                }).getContentAsString()
            ],
            footer: [
                new Button({
                    class: 'button_color_blue button_text_center',
                    text: 'Сохранить', page: '/user-setting', type: 'submit'
                }).getContentAsString()
            ]
        }
    };

    const page = new UserPage(context(userData)).getContent();
    const form = page.querySelector('form');
    Validation.formValidate(form);

    return page;
};
