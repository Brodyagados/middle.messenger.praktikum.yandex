import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';


export const InternalServerErrorPage = () => {
    const context = {
        title: new PageTitle({ text: '500' }).getContentAsString(),
        description: new PageDescription({ text: 'Внутренная ошибка сервера' }).getContentAsString(),
        homeLink: new Link({ page: '/', text: 'Назад к чатам' }).getContentAsString()
    };

    return new ErrorPage(context).getContentAsString();
};
