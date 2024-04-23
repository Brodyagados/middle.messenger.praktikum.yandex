import AuthApi from '../api/auth-api';
import { PAGE_PATH } from '../constants/PagePath';
import Router from '../utils/Router';
import Store from '../utils/Store';

class SignUpController {
  async signUp(data: Record<string, unknown>) {
    try {
      const { status, responseText } = await AuthApi.signUp(data) as XMLHttpRequest;

      if (status === 200) {
        const router = new Router('#app');
        router.go(PAGE_PATH.login);
      } else {
        Store.set('signUpPage.error', responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка регистрации пользователя.';
      Store.set('signUpPage.error', errorMessage);
      console.log(errorMessage, e);
    }
  }
}

export default new SignUpController();
