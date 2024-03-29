import { AccountPage } from '..';
import { Button, Link, PageTitle, TextBox } from '../../../components';
import { ValidationType } from '../../../utils/ValidationType';

export const LoginPage = () => {
  const context = {
    header: [
      new PageTitle({ text: 'Вход' }),
    ],
    main: [
      new TextBox({
        label: 'Логин',
        inputProps: {
          attr: {
            placeholder: 'Логин',
            name: 'login',
            validation: ValidationType.LOGIN,
          },
        },
      }),
      new TextBox({
        label: 'Пароль',
        inputProps: {
          attr: {
            placeholder: 'Пароль',
            name: 'password',
            type: 'password',
            validation: ValidationType.PASSOWRD,
          },
        },
      }),
    ],
    footer: [
      new Button({
        text: 'Войти',
        attr: {
          class: 'button_color_blue',
          page: '/',
          type: 'submit',
        },
      }),
      new Link({ text: 'Зарегистрироваться', attr: { page: '/sign-in' } }),
    ],
  };

  return new AccountPage(context).getContent();
};
