export class ValidationType {
    rule: RegExp;
    message: string;

    constructor(rule: RegExp, message: string) {
        this.rule = rule;
        this.message = message;
    };

    validate(str: string) {
        return this.rule.test(str);
    }

    static getByType(type: string) {
        const entry = Object.entries(validationType).find(([key]) => key === type);
        if (!entry) {
            return null;
        }

        const [_, entryType] = entry;
        return entryType;
    }

    static inputValidate(input: HTMLInputElement) {
        const typeName = input.dataset['validation-type'];
        if (!typeName) {
            return true;
        }

        const type = ValidationType.getByType(typeName);
        if (!type) {
            return false;
        }

        const validateErrorClass = 'textbox_error_visible';
        const textbox = input.closest('.textbox');
        const isValid = !type.rule.test(input.value);

        isValid
            ? textbox?.classList.remove(validateErrorClass)
            : textbox?.classList.add(validateErrorClass);

        return isValid;
    }
}

export const validationType = {
    user: new ValidationType(
        /^[A-Z][a-z-]+$/i,
        'Поле должно содержать заглавную первую букву, не содержать пробелов, цифр и спецсимволов (кроме дефиса)' 
    ),
    login: new ValidationType(
        /^(?=.+[a-z])[a-z\d-_\s]{3,20}$/i,
        'Поле должно содержать от 3 до 20 символов, минимум одну латинскую букву, может содержать цифры, дефис и нижнее подчеркивание' 
    ),
    password: new ValidationType(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,40}$/,
        'Пароль должен содержать от 8 до 40 символов, минимум одну заглавную букву и цифру' 
    ),
    phone: new ValidationType(
        /^((\+7|7|8)+([0-9]){10,15})$/, 
        'Телефон должен содержать от 10 до 15 символов и состоять из цифр (может начинается с плюса)' 
    ),
    email: new ValidationType(
        /^[^\s@]+@[^\s@]+$/, 
        'Некорректный формат email`а' 
    ),
    message: new ValidationType(
        /^\s*$/, 
        'Поле не должно быть пустым' 
    )
}
