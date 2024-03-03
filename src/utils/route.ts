import Handlebars from 'handlebars';

import * as Pages from '../pages';

class Page {
    path: string;
    template: string;

    constructor(path: string, template: string) {
        this.path = path;
        this.template = template;
    };

    route(routeData: object = {}) {
        const app = document.getElementById('app');
        const template = Handlebars.compile(this.template);

        app!.innerHTML = template(routeData);
    }
}

export const page = {
    home: new Page('/', 'home'),
    login: new Page('/login', 'login'),
    signIn: new Page('/sign-in', 'signIn'),
    notFound: new Page('/not-found', Pages.NotFoundErrorPage),
    internalServerError: new Page('/internal-server-error', Pages.InternalServerErrorPage)
}
