import {
  Avatar, Button, DialogFooter,
  DialogHeader, DialogMain, TextBox,
} from '../../../components';
import { IUserData, UserPage } from '..';
import { ValidationType } from '../../../utils/ValidationType';

export const UserSettingEditPage = (userData: IUserData) => {
  const context = (userData: IUserData) => {
    const {
      firstName, secondName,
      email, login, phone,
    } = userData;

    return {
      form: [
        new DialogHeader({ content: [
          new Avatar({ attr: { alt: 'Аватар пользователя.' } }),
        ] }),
        new DialogMain({ content: [
          new TextBox({
            label: 'Почта',
            attr: { class: 'textbox_inline' },
            inputProps: {
              attr: {
                name: 'email',
                value: email,
                validation: ValidationType.EMAIL,
              },
            },
          }),
          new TextBox({
            label: 'Логин',
            attr: { class: 'textbox_inline' },
            inputProps: {
              attr: {
                name: 'login',
                value: login,
                validation: ValidationType.LOGIN,
              },
            },
          }),
          new TextBox({
            label: 'Имя',
            attr: { class: 'textbox_inline' },
            inputProps: {
              attr: {
                name: 'first_name',
                value: firstName,
                validation: ValidationType.USER,
              },
            },
          }),
          new TextBox({
            label: 'Фамилия',
            attr: { class: 'textbox_inline' },
            inputProps: {
              attr: {
                name: 'second_name',
                value: secondName,
                validation: ValidationType.USER,
              },
            },
          }),
          new TextBox({
            label: 'Телефон',
            attr: { class: 'textbox_inline' },
            inputProps: {
              attr: {
                name: 'phone',
                value: phone,
                validation: ValidationType.PHONE,
              },
            },
          }),
        ] }),
        new DialogFooter({ content: [
          new Button({
            text: 'Сохранить',
            attr: {
              class: 'button_color_blue button_text_center',
              page: '/user-setting',
              type: 'submit',
            },
          }),
        ] }),
      ],
    };
  };

  return new UserPage(context(userData)).getContent();
};
