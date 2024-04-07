import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';
import { PAGE_PATH } from '../../../constants/PagePath';

export class InternalServerErrorPage extends ErrorPage {
  constructor() {
    super({
      title: new PageTitle({ text: '500' }),
      description: new PageDescription({ text: 'Внутренная ошибка сервера' }),
      homeLink: new Link({
        attr: { href: PAGE_PATH.messenger },
        text: 'Назад к чатам',
      }),
    });
  }
}
