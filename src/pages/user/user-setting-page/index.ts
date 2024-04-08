import {
  Avatar, DialogFooter, DialogHeader,
  DialogMain, Link, PageTitle, TextBox,
} from '../../../components';
import { IUserData, UserPage } from '..';

export class UserSettingPage extends UserPage {
  constructor() {
    super({
      form: [
        new DialogHeader({
          content: [
            new Avatar({ attr: { alt: 'Аватар пользователя.' } }),
            new PageTitle({ text: '' }),
          ]
        }),
        new DialogMain({
          content: [
            new TextBox({
              label: 'Почта',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'email',
                  disabled: true,
                },
              },
            }),
            new TextBox({
              label: 'Логин',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'login',
                  disabled: true,
                },
              },
            }),
            new TextBox({
              label: 'Имя',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'first_name',
                  disabled: true,
                },
              },
            }),
            new TextBox({
              label: 'Фамилия',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'second_name',
                  disabled: true,
                },
              },
            }),
            new TextBox({
              label: 'Телефон',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'phone',
                  disabled: true,
                },
              },
            }),
          ]
        }),
        new DialogFooter({
          content: [
            new Link({ text: 'Изменить данные', attr: { page: '/user-setting-edit' } }),
            new Link({ text: 'Изменить пароль', attr: { page: '/change-password' } }),
            new Link({ text: 'Выйти', attr: { class: 'link_color_red', page: '/login' } }),
          ]
        }),
      ],
    });
  }
};
