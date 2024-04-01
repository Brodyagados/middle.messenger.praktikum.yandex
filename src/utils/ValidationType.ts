export enum ValidationType {
    USER = 'user',
    LOGIN = 'login',
    PASSOWRD = 'password',
    EQUAL_PASSWORD = 'equal-password',
    PHONE = 'phone',
    EMAIL = 'email',
    MESSAGE = 'message'
}

export class Validation {
  type: ValidationType;

  rule: RegExp;

  message: string;

  constructor(type: ValidationType, rule: RegExp, message: string) {
    this.type = type;
    this.rule = rule;
    this.message = message;
  }

  validate(str: string) {
    return this.rule.test(str);
  }

  static getByType(type: string) {
    return validationTypes.find((item) => item.type === type);
  }

  static validateInput(input: HTMLInputElement) {
    const typeName = input.getAttribute('validation');
    if (!typeName) {
      return true;
    }

    const type = Validation.getByType(typeName);
    if (!type) {
      return false;
    }

    const validateErrorClass = 'textbox_error_visible';
    const textbox = input.closest('.textbox');
    const isValid = type.rule.test(input.value);

    isValid
      ? textbox?.classList.remove(validateErrorClass)
      : textbox?.classList.add(validateErrorClass);

    return isValid;
  }

  static validateForm(form: HTMLFormElement) {
    const formData: Record<string, string | null> = {};

    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      const isValid = this.validateInput(input);
      formData[input.name] = isValid ? input.value : null;
    });

    console.log(formData);

    const isValid = !Object.values(formData).includes(null);
    return isValid;
  }
}

const validationTypes = [
  new Validation(
    ValidationType.USER,
    /^[А-ЯЁ][a-яё-]+$/,
    'Поле должно содержать заглавную первую букву, не содержать пробелов, цифр и спецсимволов (кроме дефиса)',
  ),
  new Validation(
    ValidationType.LOGIN,
    /^(?=.+[a-z])[a-z\d-_\s]{3,20}$/i,
    'Логин должен содержать от 3 до 20 символов, минимум одну латинскую букву, может содержать цифры, дефис и нижнее подчеркивание',
  ),
  new Validation(
    ValidationType.PASSOWRD,
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/,
    'Пароль должен содержать от 8 до 40 символов, минимум одну заглавную букву и цифру',
  ),
  new Validation(
    ValidationType.PHONE,
    /^((\+7|7|8)+([0-9]){10,15})$/,
    'Телефон должен содержать от 10 до 15 символов и состоять из цифр (может начинается с плюса)',
  ),
  new Validation(
    ValidationType.EMAIL,
    /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    'Некорректный формат email`а',
  ),
  new Validation(
    ValidationType.MESSAGE,
    /^\s*$/,
    'Поле не должно быть пустым',
  ),
];
