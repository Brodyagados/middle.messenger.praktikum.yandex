import { expect } from 'chai';
import { PAGE_PATH } from '../constants/PagePath';
import Block from './Block';
import Router from './Router';

describe('Тестирование Router', () => {
    class TestPage extends Block {
        render() {
            return this.compile('', this._props);
        }
    }

    it('Метод .use() должен добавить роут', () => {
        const router = new Router('#app');

        router.use(PAGE_PATH.messenger, new TestPage({}));
        expect(router.routes.length).to.eq(1);
    })
});
