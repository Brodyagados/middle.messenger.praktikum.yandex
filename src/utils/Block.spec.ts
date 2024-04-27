import { expect } from 'chai';
import Block from './Block';

describe('Тестирование Block', () => {
  const template = '{{text}}';

  class TestBlock extends Block {
    render() {
      return this.compile(template, this._props);
    }
  }

  it('Компонент должен отрендериться с указанными параметрами', () => {
    const text = 'Тестовый Block';
    const testBlock = new TestBlock({ text });
    const testBlockText = testBlock.element?.textContent;

    expect(testBlockText).to.be.eq(text);
  });
});
