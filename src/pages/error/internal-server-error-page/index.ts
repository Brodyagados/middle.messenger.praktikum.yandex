import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';


export const InternalServerErrorPage = () => {
    const context = {
        title: new PageTitle({ text: '500' }).render(),
        description: new PageDescription({ text: 'Внутренная ошибка сервера' }).render(),
        homeLink: new Link({ page: '/', text: 'Назад к чатам' }).render()
    };

    return new ErrorPage(context).getContent();
};
