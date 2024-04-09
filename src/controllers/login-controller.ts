import AuthApi from '../api/auth-api';
import { PAGE_PATH } from '../constants/PagePath';
import Router from '../utils/Router';
import Store from '../utils/Store';

class LoginController {
  async login(data: Record<string, unknown>) {
    try {
      const request = await AuthApi.signIn(data) as XMLHttpRequest;
      const { status, responseText } = request;

      if (status === 200) {
        const router = new Router('#app');
        router.go(PAGE_PATH.messenger);
      } else {
        Store.set('signUpPage.error', responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка входа в систему.';
      Store.set('loginPage.error', errorMessage);
      throw Error(errorMessage);
    }
  }
}

export default new LoginController();
