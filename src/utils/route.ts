import Handlebars from 'handlebars';

import * as Pages from '../pages';

class Page {
    path: string;
    template: string;
    routeData: object;

    constructor(path: string, template: string, routeData: object = {}) {
        this.path = path;
        this.template = template;
        this.routeData = routeData;
    };

    route() {
        const app = document.getElementById('app');
        const template = Handlebars.compile(this.template);

        app!.innerHTML = template(this.routeData);
    }
}

export const page = {
    home: new Page('/', 'home'),
    login: new Page('/login', 'login'),
    signIn: new Page('/sign-in', 'signIn'),
    notFound: new Page('/not-found', Pages.NotFoundErrorPage),
    internalServerError: new Page('/internal-server-error', '5**')
}
