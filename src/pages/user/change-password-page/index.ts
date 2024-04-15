import {
  Button, DialogFooter, DialogMain,
  ERROR_MESSAGE_TYPE, ErrorMessage, TextBox,
} from '../../../components';
import { UserPage } from '..';
import { Validation, ValidationType } from '../../../utils/ValidationType';
import userController from '../../../controllers/user-controller';
import Store from '../../../utils/Store';

export class ChangePasswordPage extends UserPage {
  init() {
    Store.set('changePasswordPage.error', '');
    super.init();
  }

  constructor() {
    super({
      form: [
        new DialogMain({
          content: [
            new TextBox({
              label: 'Старый пароль',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'oldPassword',
                  type: 'password',
                  validation: ValidationType.PASSOWRD,
                },
              },
            }),
            new TextBox({
              label: 'Новый пароль',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'newPassword',
                  type: 'password',
                  validation: ValidationType.PASSOWRD,
                },
              },
            }),
            new TextBox({
              label: 'Новый пароль еще раз',
              attr: { class: 'textbox_inline' },
              inputProps: {
                attr: {
                  name: 'newPassword_equal',
                  type: 'password',
                  validation: ValidationType.PASSOWRD,
                },
              },
            }),
          ],
        }),
        new DialogFooter({
          content: [
            new (ErrorMessage(ERROR_MESSAGE_TYPE.changePasswordPage))({}),
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

                  if (isValid) {
                    userController.changePassword(formData);
                  } else {
                    Store.set('changePasswordPage.error', 'Все поля должны быть заполнены!');
                  }
                },
              },
            }),
          ],
        }),
      ],
    });
  }
}
