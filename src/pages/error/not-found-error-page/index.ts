import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';


export const NotFoundErrorPage = () => {
    const context = {
        title: new PageTitle({ text: '404' }).getContentAsString(),
        description: new PageDescription({ text: 'Страница не найдена' }).getContentAsString(),
        homeLink: new Link({ page: '/', text: 'Назад к чатам' }).getContentAsString()
    };

    return new ErrorPage(context).getContent();
};
