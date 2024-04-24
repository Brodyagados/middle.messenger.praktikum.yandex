import { AccountPage } from '..';
import {
  Button, DialogFooter, DialogHeader,
  DialogMain, Link, PageTitle, TextBox,
  ErrorMessage, ERROR_MESSAGE_TYPE,
} from '../../../components';
import { PAGE_PATH } from '../../../constants/PagePath';
import loginController from '../../../controllers/login-controller';
import Router from '../../../utils/Router';
import Store from '../../../utils/Store';
import { Validation, ValidationType } from '../../../utils/ValidationType';

export class LoginPage extends AccountPage {
  constructor() {
    super({
      form: [
        new DialogHeader({
          content: [
            new PageTitle({ text: 'Вход' }),
          ],
        }),
        new DialogMain({
          content: [
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
        }),
        new DialogFooter({
          content: [
            new (ErrorMessage(ERROR_MESSAGE_TYPE.loginPage))({}),
            new Button({
              text: 'Войти',
              attr: {
                class: 'button_color_blue',
              },
              events: {
                click: (event: Event) => {
                  event.preventDefault();

                  const target = event.target as HTMLElement;
                  const form = target.closest('form') as HTMLFormElement;
                  const { isValid, formData } = Validation.validateForm(form);

                  if (isValid) {
                    loginController.login(formData);
                  } else {
                    Store.set('loginPage.error', 'Все поля должны быть заполнены!');
                  }
                },
              },
            }),
            new Link({
              text: 'Зарегистрироваться',
              events: {
                click: (event: Event) => {
                  event.preventDefault();

                  const router = new Router('#app');
                  router.go(PAGE_PATH.signUp);
                },
              },
            }),
          ],
        }),
      ],
    });
  }

  render() {
    Store.set('loginPage.error', '');
    return super.render();
  }
}
