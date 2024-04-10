import AuthApi from '../api/auth-api';
import Store from '../utils/Store';

class UserController {
  async get() {
    try {
      const { response } = await AuthApi.user() as XMLHttpRequest;
      const user = JSON.parse(response);

      Store.set('user', user);
    } catch (e) {
      const errorMessage = 'Ошибка получения данных пользователя.';
      throw Error(errorMessage);
    }
  }
}

export default new UserController();
