import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';
import Router from '../../../utils/Router';

export class InternalServerErrorPage extends ErrorPage {
  constructor() {
    super({
      title: new PageTitle({ text: '500' }),
      description: new PageDescription({ text: 'Внутренная ошибка сервера' }),
      homeLink: new Link({ 
        attr: { page: '/' }, 
        text: 'Назад к чатам',
        events: {
          click: (event: Event) => {
            event.preventDefault();
            
            const router = new Router('#app');
            router.go('/messenger');
          }
        }
      }),
    });
  }
}
