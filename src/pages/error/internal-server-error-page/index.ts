import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';

export const InternalServerErrorPage = () => {
  const context = {
    title: new PageTitle({ text: '500' }),
    description: new PageDescription({ text: 'Внутренная ошибка сервера' }),
    homeLink: new Link({ attr: { page: '/' }, text: 'Назад к чатам' }),
  };

  return new ErrorPage(context).getContent();
};
