import { AccountPage } from '..';
import {
  Button, DialogFooter, DialogHeader,
  DialogMain, Link, PageTitle, TextBox,
} from '../../../components';
import { PAGE_PATH } from '../../../constants/PagePath';
import Router from '../../../utils/Router';
import { ValidationType } from '../../../utils/ValidationType';

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
            new Button({
              text: 'Войти',
              attr: {
                class: 'button_color_blue',
                page: '/',
                type: 'submit',
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
}
