import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';
import { PAGE_PATH } from '../../../constants/PagePath';

export class NotFoundErrorPage extends ErrorPage {
  constructor() {
    super({
      title: new PageTitle({ text: '404' }),
      description: new PageDescription({ text: 'Страница не найдена' }),
      homeLink: new Link({
        attr: { href: PAGE_PATH.messenger },
        text: 'Назад к чатам',
      }),
    });
  }
}
