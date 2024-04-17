import {
  AvatarButton, Button, DialogFooter, DialogHeader,
  DialogMain, ERROR_MESSAGE_TYPE, ErrorMessage,
  Form, Link, PageTitle, TextBox,
} from '../../../components';
import { UserPage } from '..';
import { PAGE_PATH } from '../../../constants/PagePath';
import Router from '../../../utils/Router';
import logoutController from '../../../controllers/logout-controller';
import userController from '../../../controllers/user-controller';
import { Input, UserSettingInputField } from '../../../components/base/input';
import { Modal } from '../../../components/base/modal';
import Store from '../../../utils/Store';

export class UserSettingPage extends UserPage {
  init() {
    userController.get();
    Store.set('userSettingPage.avatarError', '');
    super.init();
  }

  constructor() {
    const router = new Router('#app');

    super({
      form: [
        new DialogHeader({
          content: [
            new AvatarButton({
              avatarProps: {
                attr: { alt: 'Аватар пользователя.' },
              },
              events: {
                click: (event: Event) => {
                  event.preventDefault();

                  document.querySelector('dialog')?.showModal();
                },
              },
            }),
            new PageTitle({ text: '' }),
            new Modal({
              content: [
                new Form({
                  content: [
                    new Input({ attr: { name: 'avatar', type: 'file' } }),
                    new (ErrorMessage(ERROR_MESSAGE_TYPE.userSettingPage))({}),
                    new Button({
                      text: 'Отправить',
                      attr: {
                        class: 'button_color_blue button_text_center',
                      },
                      events: {
                        click: async (event: Event) => {
                          event.preventDefault();

                          const target = event.target as HTMLElement;
                          const form = target.closest('form') as HTMLFormElement;
                          const input = form.querySelector('input[name=avatar]') as HTMLInputElement;

                          if (input.files && input.files.length > 0) {
                            const [avatar] = input.files;
                            await userController.updateAvatar(avatar);

                            form.closest('dialog')?.close();
                          } else {
                            Store.set('userSettingPage.avatarError', 'Необходимо выбрать изображение!');
                          }
                        },
                      },
                    }),
                  ],
                }),
              ],
            }),
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
