import AuthApi from '../api/auth-api';
import { PAGE_PATH } from '../constants/PagePath';
import Router from '../utils/Router';

class SignUpController {
  async signUp(data: Record<string, unknown>) {
    try {
      const { status, responseText } = await AuthApi.signUp(data) as XMLHttpRequest;

      if (status === 200) {
        const router = new Router('#app');
        router.go(PAGE_PATH.login);
      } else {
        console.log(responseText);
      }
    } catch (e) {
      throw Error('Ошибка регистрации пользователя.');
    }
  }
}

export default new SignUpController();
