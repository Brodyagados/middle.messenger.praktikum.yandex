import { AccountPage } from '..';
import {
  Button, DialogFooter, DialogHeader,
  DialogMain, ErrorMessage, Link,
  PageTitle, TextBox
} from '../../../components';
import { PAGE_PATH } from '../../../constants/PagePath';
import SignUpController from '../../../controllers/sign-up-controller';
import { connect } from '../../../utils/HOC';
import Router from '../../../utils/Router';
import Store from '../../../utils/Store';
import { Validation, ValidationType } from '../../../utils/ValidationType';
import { Indexed } from '../../../utils/utils';

export class SignUpPage extends AccountPage {
  constructor() {
    super({
      form: [
        new DialogHeader({
          content: [
            new PageTitle({ text: 'Регистрация' }),
          ],
        }),
        new DialogMain({
          content: [
            new TextBox({
              label: 'Почта',
              inputProps: {
                attr: {
                  placeholder: 'Почта',
                  name: 'email',
                  validation: ValidationType.EMAIL,
                },
              },
            }),
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
              label: 'Имя',
              inputProps: {
                attr: {
                  placeholder: 'Имя',
                  name: 'first_name',
                  validation: ValidationType.USER,
                },
              },
            }),
            new TextBox({
              label: 'Фамилия',
              inputProps: {
                attr: {
                  placeholder: 'Фамилия',
                  name: 'second_name',
                  validation: ValidationType.USER,
                },
              },
            }),
            new TextBox({
              label: 'Телефон',
              inputProps: {
                attr: {
                  placeholder: 'Телефон',
                  name: 'phone',
                  validation: ValidationType.PHONE,
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
            new TextBox({
              label: 'Пароль еще раз',
              inputProps: {
                attr: {
                  placeholder: 'Пароль еще раз',
                  name: 'password_equal',
                  type: 'password',
                  validation: ValidationType.PASSOWRD,
                },
              },
            }),
          ],
        }),
        new DialogFooter({
          content: [
            new ErrorMessage({ text: Store.getState().signUpPage.error }),
            new Button({
              text: 'Зарегистрироваться',
              attr: {
                class: 'button_color_blue',
                page: '/login',
              },
              events: {
                click: (event: Event) => {
                  event.preventDefault();

                  const target = event.target as HTMLElement;
                  const form = target.closest('form') as HTMLFormElement;
                  const { isValid, formData } = Validation.validateForm(form);

                  if (isValid) {
                    SignUpController.signUp(formData);
                  } else {
                    Store.set('signUpPage.error', 'Все поля должны быть заполнены!');
                  }
                },
              },
            }),
            new Link({
              text: 'Войти',
              events: {
                click: (event: Event) => {
                  event.preventDefault();

                  const router = new Router('#app');
                  router.go(PAGE_PATH.login);
                },
              },
            }),
          ],
        }),
      ],
    });
  }
}

function mapUserToProps(state: Indexed) {
  return {
    error: state.signUpPage.error
  };
}

export default connect(SignUpPage, mapUserToProps);
