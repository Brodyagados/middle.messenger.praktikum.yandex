import AuthApi from '../api/auth-api';
import UserApi from '../api/user-api';
import { PAGE_PATH } from '../constants/PagePath';
import Router from '../utils/Router';
import Store from '../utils/Store';

class UserController {
  async get() {
    try {
      const { status, response } = await AuthApi.user() as XMLHttpRequest;
      const user = JSON.parse(response);

      if (status === 200) {
        Store.set('user', user);
      }

      if (status === 401) {
        const router = new Router('#app');
        router.go(PAGE_PATH.login);
      }

    } catch (e) {
      const errorMessage = 'Ошибка получения данных пользователя.';
      throw Error(errorMessage);
    }
  }

  async update(data: Record<string, unknown>) {
    try {
      const request = await UserApi.updateSettings(data) as XMLHttpRequest;
      const { status, responseText } = request;

      if (status === 200) {
        const router = new Router('#app');
        router.go(PAGE_PATH.userSetting);
      } else {
        Store.set('userSettingEditPage.error', responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка смены пароля.';
      Store.set('userSettingEditPage.error', errorMessage);
      throw Error(errorMessage);
    }
  }

  async changePassword(data: Record<string, unknown>) {
    try {
      const request = await UserApi.changePassword(data) as XMLHttpRequest;
      const { status, responseText } = request;

      if (status === 200) {
        const router = new Router('#app');
        router.go(PAGE_PATH.messenger);
      } else {
        Store.set('changePasswordPage.error', responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка смены пароля.';
      Store.set('changePasswordPage.error', errorMessage);
      throw Error(errorMessage);
    }
  }

  async updateAvatar(file: File) {
    const errorField = 'userSettingPage.avatarError';

    try {
      const formData = new FormData();
      formData.append('avatar', file);
      const request = await UserApi.updateAvatar(formData) as XMLHttpRequest;
      const { response, status, responseText } = request;

      if (status === 200) {
        const user = JSON.parse(response);

        Store.set('user', user);
        Store.set(errorField, '');
      } else {
        Store.set(errorField, responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка загрузки аватара.';
      Store.set(errorField, errorMessage);
      throw Error(errorMessage);
    }
  }

  async searchByLogin(login: string) {
    try {
      const request = await UserApi.searchUserByLogin({ login }) as XMLHttpRequest;
      const { status, response, responseText } = request;

      if (status === 200) {
        const [user] = JSON.parse(response);
        return user.id;
      }
      Store.set('chatPage.error', responseText);
    } catch (e) {
      const errorMessage = 'Ошибка поиска пользователя.';
      Store.set('chatPage.error', errorMessage);
      throw Error(errorMessage);
    }
  }
}

export default new UserController();
