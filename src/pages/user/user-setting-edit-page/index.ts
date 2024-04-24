import {
  Avatar, Button, DialogFooter,
  DialogHeader, DialogMain, TextBox,
  ERROR_MESSAGE_TYPE, ErrorMessage,
} from '../../../components';
import { UserPage } from '..';
import { Validation, ValidationType } from '../../../utils/ValidationType';
import userController from '../../../controllers/user-controller';
import Store from '../../../utils/Store';

export class UserSettingEditPage extends UserPage {
  init() {
    Store.set('userSettingEditPage.error', '');
    userController.get();
    super.init();
  }

  constructor() {
    super({
      form: [
        new DialogHeader({
          content: [
            new Avatar({ attr: { alt: 'Аватар пользователя.' } }),
          ],
        }),
        new DialogMain({
          content: [
            new TextBox({
              label: 'Почта',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'email',
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
                  validation: ValidationType.PHONE,
                },
              },
            }),
          ],
        }),
        new DialogFooter({
          content: [
            new (ErrorMessage(ERROR_MESSAGE_TYPE.userSettingEditPage))({}),
            new Button({
              text: 'Сохранить',
              attr: {
                class: 'button_color_blue button_text_center',
              },
              events: {
                click: (event: Event) => {
                  event.preventDefault();

                  const target = event.target as HTMLElement;
                  const form = target.closest('form') as HTMLFormElement;
                  const { isValid, formData } = Validation.validateForm(form);

                  if (!isValid) {
                    Store.set('userSettingEditPage.error', 'Все поля должны быть заполнены!');
                    return;
                  }

                  userController.update(formData);
                },
              },
            }),
          ],
        }),
      ],
    });
  }
}
