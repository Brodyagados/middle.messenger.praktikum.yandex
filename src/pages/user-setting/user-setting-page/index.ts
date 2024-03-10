import Handlebars from 'handlebars';

import './user-setting-page.scss';
export { default as UserSettingPage } from './user-setting-page.hbs?raw';

Handlebars.registerHelper('userSettingData', (options) => {
    return options.fn({
        email: 'pochta@yandex.ru',
        login: 'ivanivanov',
        first_name: 'Иван',
        second_name: 'Иванов',
        phone: '+7 (909) 967 30 30'
    })
});
