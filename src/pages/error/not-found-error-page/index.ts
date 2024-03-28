import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';


export const NotFoundErrorPage = () => {
    const context = {
        title: new PageTitle({ text: '404' }).render(),
        description: new PageDescription({ text: 'Страница не найдена' }).render(),
        homeLink: new Link({ page: '/', text: 'Назад к чатам' }).render()
    };

    return new ErrorPage(context).getContent();
};
