import { Button, TextBox } from '../../../components';
import { UserPage } from '..';
import { ValidationType } from '../../../utils/ValidationType';

export const ChangePasswordPage = () => {
  const context = {
    main: [
      new TextBox({
        label: 'Старый пароль',
        attr: { class: 'textbox_inline' },
        inputProps: {
          attr: {
            name: 'oldPassword',
            type: 'password',
            validation: ValidationType.PASSOWRD,
          }
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
          }
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
          }
        },
      }),
    ],
    footer: [
      new Button({
        text: 'Сохранить',
        attr: {
          class: 'button_color_blue button_text_center',
          page: '/user-setting',
          type: 'submit',
        }
      }),
    ],
  };

  return new UserPage(context).getContent();
};
