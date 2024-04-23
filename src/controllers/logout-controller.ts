import AuthApi from '../api/auth-api';
import { PAGE_PATH } from '../constants/PagePath';
import Router from '../utils/Router';
import Store from '../utils/Store';

class LogoutController {
  async logout() {
    try {
      await AuthApi.logout() as XMLHttpRequest;

      Store.set('user', {});
      const router = new Router('#app');
      router.go(PAGE_PATH.login);
    } catch (e) {
      const errorMessage = 'Ошибка выхода из системы.';
      alert(errorMessage);
      console.log(errorMessage, e);
    }
  }
}

export default new LogoutController();
