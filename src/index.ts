import Router from './utils/Router';
import * as Pages from './pages';
import { PAGE_PATH } from './constants/PagePath';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router('#app');

  router
    .use(PAGE_PATH.messenger, Pages.ChatPage)
    .use(PAGE_PATH.login, Pages.LoginPage)
    .use(PAGE_PATH.signUp, Pages.SignUpPage)
    .use(PAGE_PATH.userSetting, Pages.UserSettingPage)
    .use(PAGE_PATH.userSettingEdit, Pages.UserSettingEditPage)
    .use(PAGE_PATH.changePassword, Pages.ChangePasswordPage)
    .use(PAGE_PATH.notFound, Pages.NotFoundErrorPage)
    .use(PAGE_PATH.internalServerError, Pages.InternalServerErrorPage)
    .start();
});
