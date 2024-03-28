import { Button, TextBox } from '../../../components';
import { UserPage } from '..';
import { Validation, ValidationType } from '../../../utils/ValidationType';

export const ChangePasswordPage = () => {
  const context = {
    main: [
      new TextBox({
        class: 'textbox_inline',
        label: 'Старый пароль',
        name: 'oldPassword',
        type: 'password',
        validationType: ValidationType.PASSOWRD,
      }).getContentAsString(),
      new TextBox({
        class: 'textbox_inline',
        label: 'Новый пароль',
        name: 'newPassword',
        type: 'password',
        validationType: ValidationType.PASSOWRD,
      }).getContentAsString(),
      new TextBox({
        class: 'textbox_inline',
        label: 'Новый пароль еще раз',
        name: 'newPassword_equal',
        type: 'password',
        validationType: ValidationType.PASSOWRD,
      }).getContentAsString(),
    ],
    footer: [
      new Button({
        class: 'button_color_blue button_text_center',
        text: 'Сохранить',
        page: '/user-setting',
        type: 'submit',
      }).getContentAsString(),
    ],
  };

  const page = new UserPage(context).getContent();
  const form = page.querySelector('form');
  Validation.formValidate(form);

  return page;
};
