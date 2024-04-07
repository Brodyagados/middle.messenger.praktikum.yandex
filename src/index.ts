import Router from './utils/Router';
import * as Pages from './pages';

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router('#app');

  router
    .use('/not-found', Pages.NotFoundErrorPage)
    .use('/internal-server-error', Pages.InternalServerErrorPage)
    .start();
});
