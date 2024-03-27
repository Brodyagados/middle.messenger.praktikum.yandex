import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';


const context = {
    title: new PageTitle({ text: '404' }).render(),
    description: new PageDescription({ text: 'Страница не найдена' }).render(),
    homeLink: new Link({ page: '/', text: 'Назад к чатам' }).render()
};

export const NotFoundErrorPage = () => (
    new ErrorPage(context).getContent()
);
