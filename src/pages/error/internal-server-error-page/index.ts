import { Link, PageDescription, PageTitle } from '../../../components';
import { ErrorPage } from '..';


const context = {
    title: new PageTitle({ text: '500' }).render(),
    description: new PageDescription({ text: 'Внутренная ошибка сервера' }).render(),
    homeLink: new Link({ page: '/', text: 'Назад к чатам' }).render()
};

export const InternalServerErrorPage = () => (
    new ErrorPage(context).getContent()
);