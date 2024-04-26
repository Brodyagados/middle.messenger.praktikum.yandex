import { expect } from 'chai';
import Block from './Block';

describe('Тестирование Block', () => {
    const testTemplate = '{{text}}';

    interface ITestBlock {
        text: string
    }

    class TestBlock extends Block {
        constructor(props: ITestBlock) {
            super(props);
        }

        render() {
            return this.compile(testTemplate, this._props);
        }
    }

    it('Рендер', () => {
        const text = 'Тестовый Block';
        const testBlock = new TestBlock({ text });
        const testBlockText = testBlock.element?.textContent;

        expect(testBlockText).to.be.eq(text);
    });
});
