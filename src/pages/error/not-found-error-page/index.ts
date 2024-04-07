import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';

export class NotFoundErrorPage extends ErrorPage {
  constructor() {
    super({
      title: new PageTitle({ text: '404' }),
      description: new PageDescription({ text: 'Страница не найдена' }),
      homeLink: new Link({ attr: { page: '/' }, text: 'Назад к чатам' }),
    });
  }
}
