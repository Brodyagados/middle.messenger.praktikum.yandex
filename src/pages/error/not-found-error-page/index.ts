import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';
import { PAGE_PATH } from '../../../constants/PagePath';
import Router from '../../../utils/Router';

export class NotFoundErrorPage extends ErrorPage {
  constructor() {
    super({
      title: new PageTitle({ text: '404' }),
      description: new PageDescription({ text: 'Страница не найдена' }),
      homeLink: new Link({
        text: 'Назад к чатам',
        events: {
          click: (event: Event) => {
            event.preventDefault();

            const router = new Router('#app');
            router.go(PAGE_PATH.messenger);
          }
        }
      }),
    });
  }
}
