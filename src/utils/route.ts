class Page {
    path: string;
    handlerContentGenerate: () => string;

    constructor(path: string, handlerContentGenerate: () => string) {
        this.path = path;
        this.handlerContentGenerate = handlerContentGenerate;
    };

    route() {
        const main = document.getElementById('app');
        main!.innerHTML = this.handlerContentGenerate();
    }
}

export const page = {
    home: new Page('/', () => { return 'home' }),
    login: new Page('/login', () => { return 'login' }),
    signIn: new Page('/sign-in', () => { return 'signIn' }),
    notFound: new Page('/not-found', () => { return '404' }),
    internalServerError: new Page('/internal-server-error', () => { return '5**' })
}