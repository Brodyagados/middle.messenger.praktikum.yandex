import { AccountPage } from '..';
import { Button, Link, PageTitle, TextBox } from '../../../components';
import { Validation, ValidationType } from '../../../utils/ValidationType';

export const SignInPage = () => {
  const context = {
    header: [
      new PageTitle({ text: 'Регистрация' }).getContentAsString(),
    ],
    main: [
      new TextBox({
        label: 'Почта',
        placeholder: 'Почта',
        name: 'email',
        validationType: ValidationType.EMAIL,
      }).getContentAsString(),
      new TextBox({
        label: 'Логин',
        placeholder: 'Логин',
        name: 'login',
        validationType: ValidationType.LOGIN,
      }).getContentAsString(),
      new TextBox({
        label: 'Имя',
        placeholder: 'Имя',
        name: 'first_name',
        validationType: ValidationType.USER,
      }).getContentAsString(),
      new TextBox({
        label: 'Фамилия',
        placeholder: 'Фамилия',
        name: 'second_name',
        validationType: ValidationType.USER,
      }).getContentAsString(),
      new TextBox({
        label: 'Телефон',
        placeholder: 'Телефон',
        name: 'phone',
        validationType: ValidationType.PHONE,
      }).getContentAsString(),
      new TextBox({
        label: 'Пароль',
        placeholder: 'Пароль',
        name: 'password',
        type: 'password',
        validationType: ValidationType.PASSOWRD,
      }).getContentAsString(),
      new TextBox({
        label: 'Пароль еще раз',
        placeholder: 'Пароль еще раз',
        name: 'password_equal',
        type: 'password',
        validationType: ValidationType.EQUAL_PASSWORD,
      }).getContentAsString(),
    ],
    footer: [
      new Button({
        class: 'button_color_blue',
        text: 'Зарегистрироваться',
        page: '/login',
        type: 'submit',
      }).getContentAsString(),
      new Link({ text: 'Войти', page: '/login' }).getContentAsString(),
    ],
  };

  const page = new AccountPage(context).getContent();
  const form = page.querySelector('form');
  Validation.formValidate(form);

  return page;
};
