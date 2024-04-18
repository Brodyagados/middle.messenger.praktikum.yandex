import Block from '../../../utils/Block';
import { Button } from '../button';
import './modal.scss';
import template from './modal.hbs?raw';
import additionalButtonIconSrc from '../../../assets/icons/close.svg';

interface IModal {
  content: Block[]
}

export class Modal extends Block {
  constructor(props: IModal) {
    super({
      ...props,
      attr: { class: 'modal' },
      closeButton: new Button({
        img: {
          src: additionalButtonIconSrc,
          alt: 'Кнопка закрытия диалогового окна.',
        },
        attr: {
          title: 'Закрыть',
          class: 'modal__close-button'
        },
        events: {
          click: (event: Event) => {
            event.preventDefault();

            const button = event.currentTarget as HTMLElement;
            button.closest('dialog')?.close();
          }
        }
      }),
    }, 'dialog');
  }

  render() {
    return this.compile(template, this._props);
  }
}
