import { Button, TextBox } from '../../../components';
import { UserPage } from '..';


const context = {
    main: [
        new TextBox({ class: 'textbox_inline', label: 'Старый пароль', name: 'oldPassword', type: 'password' }).render(),
        new TextBox({ class: 'textbox_inline', label: 'Новый пароль', name: 'newPassword', type: 'password' }).render(),
        new TextBox({ class: 'textbox_inline', label: 'Новый пароль еще раз', name: 'newPassword_equal', type: 'password' }).render()
    ],
    footer: [
        new Button({ class: 'button_color_blue button_text_center', text: 'Сохранить', page: '/user-setting' }).render()
    ]
};

export const ChangePasswordPage = () => (
    new UserPage(context).render()
);
