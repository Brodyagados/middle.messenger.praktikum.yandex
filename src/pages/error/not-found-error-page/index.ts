import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';

export const NotFoundErrorPage = () => {
  const context = {
    title: new PageTitle({ text: '404' }),
    description: new PageDescription({ text: 'Страница не найдена' }),
    homeLink: new Link({ attr: { page: '/' }, text: 'Назад к чатам' }),
  };

  return new ErrorPage(context).getContent();
};
