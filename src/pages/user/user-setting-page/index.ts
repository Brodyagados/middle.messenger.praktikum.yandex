import {
  Avatar, DialogFooter, DialogHeader,
  DialogMain, Link, PageTitle, TextBox,
} from '../../../components';
import { UserPage } from '..';
import { PAGE_PATH } from '../../../constants/PagePath';
import Router from '../../../utils/Router';
import logoutController from '../../../controllers/logout-controller';
import userController from '../../../controllers/user-controller';
import { UserSettingInputField } from '../../../components/base/input';

export class UserSettingPage extends UserPage {
  init() {
    //userController.get();
    super.init();
  }

  constructor() {
    const router = new Router('#app');

    super({
      form: [
        new DialogHeader({
          content: [
            new Avatar({ attr: { alt: 'Аватар пользователя.' } }),
            new PageTitle({ text: '' }),
          ],
        }),
        new DialogMain({
          content: [
            new TextBox({
              label: 'Почта',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: UserSettingInputField.email,
                  disabled: true,
                },
              },
            }),
            new TextBox({
              label: 'Логин',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: UserSettingInputField.login,
                  disabled: true,
                },
              },
            }),
            new TextBox({
              label: 'Имя',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: UserSettingInputField.firstName,
                  disabled: true,
                },
              },
            }),
            new TextBox({
              label: 'Фамилия',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: UserSettingInputField.secondName,
                  disabled: true,
                },
              },
            }),
            new TextBox({
              label: 'Телефон',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: UserSettingInputField.phone,
                  disabled: true,
                },
              },
            }),
          ],
        }),
        new DialogFooter({
          content: [
            new Link({
              text: 'Изменить данные',
              events: {
                click: (event: Event) => {
                  event.preventDefault();
                  router.go(PAGE_PATH.userSettingEdit);
                },
              },
            }),
            new Link({
              text: 'Изменить пароль',
              events: {
                click: (event: Event) => {
                  event.preventDefault();
                  router.go(PAGE_PATH.changePassword);
                },
              },
            }),
            new Link({
              text: 'Выйти',
              attr: { class: 'link_color_red' },
              events: {
                click: (event: Event) => {
                  event.preventDefault();
                  logoutController.logout();
                },
              },
            }),
          ],
        }),
      ],
    });
  }
}
