import { Button, DialogFooter, DialogMain, TextBox } from '../../../components';
import { UserPage } from '..';
import { ValidationType } from '../../../utils/ValidationType';

export class ChangePasswordPage extends UserPage {
  constructor() {
    super({
      form: [
        new DialogMain({ content: [
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
      ] });
  }
}
