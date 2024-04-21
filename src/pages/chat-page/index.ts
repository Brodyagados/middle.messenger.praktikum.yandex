import './chat-page.scss';
import {
  Button, ChatDialogInput, TextBox,
  StoredChatDialogTitle, ChatListAccountLink,
  ChatListHeader, ChatDialog, StoredChatList,
  Form, ErrorMessage, ERROR_MESSAGE_TYPE,
  DropDownButton,
} from '../../components';
import additionalButtonIconSrc from '../../assets/icons/vertical-dotes.svg';
import attachmentButtonIconSrc from '../../assets/icons/attachment.svg';
import sendButtonIconSrc from '../../assets/icons/arrow-right.svg';
import template from './chat-page.hbs?raw';
import Block from '../../utils/Block';
import chatController from '../../controllers/chat-controller';
import { Validation, ValidationType } from '../../utils/ValidationType';
import Store from '../../utils/Store';
import { Modal } from '../../components/base/modal';
import { AvatarByType, AvatarType } from '../../components/base/avatar';

export interface IChatMessage {
  time: string,
  text?: string,
  imgSrc?: string,
  isOwner?: boolean
}

export class ChatPage extends Block {
  init() {
    chatController.getList();
    super.init();
  }

  constructor() {
    super({
      list: new StoredChatList({
        accountLink: new ChatListAccountLink(),
        addChatButton: new Button({
          text: 'Добавить чат',
          attr: {
            class: 'button_color_blue button_text_center button_flex-centered',
          },
          events: {
            click: (event: Event) => {
              event.preventDefault();

              const dialog = document.querySelector('dialog[id=addChatModal]') as HTMLDialogElement;
              dialog.showModal();
            },
          },
        }),
        addChatModal: new Modal({
          attr: { id: 'addChatModal' },
          content: [
            new Form({
              content: [
                new TextBox({
                  label: 'Наименование чата',
                  inputProps: {
                    attr: {
                      placeholder: 'Наименование чата',
                      name: 'title',
                      validation: ValidationType.NOT_EMPTY,
                    },
                  },
                }),
                new (ErrorMessage(ERROR_MESSAGE_TYPE.chatPage))({}),
                new Button({
                  text: 'Сохранить',
                  attr: {
                    class: 'button_color_blue button_text_center',
                  },
                  events: {
                    click: async (event: Event) => {
                      event.preventDefault();

                      const target = event.target as HTMLElement;
                      const form = target.closest('form') as HTMLFormElement;
                      const { isValid, formData } = Validation.validateForm(form);

                      if (!isValid) {
                        Store.set('chatPage.error', 'Наименование чата должно быть заполнено!');
                        return;
                      }

                      await chatController.create(formData);
                      form.closest('dialog')?.close();
                    },
                  },
                }),
              ],
            }),
          ],
        }),
        header: new ChatListHeader(),
        items: [],
      }),
      dialog: new ChatDialog({
        header: [
          new (AvatarByType(AvatarType.chatTitle))({
            attr: { alt: 'Аватар текущего чата.' },
          }),
          new StoredChatDialogTitle({ text: '' }),
          new DropDownButton({
            button: new Button({
              img: {
                src: additionalButtonIconSrc,
                alt: 'Кнопка открытия меню дополнительных действий с чатом.',
              },
              attr: { title: 'Дополнительно' },
              events: {
                click: (event: Event) => {
                  event.preventDefault();

                  const button = event.currentTarget as HTMLElement;
                  const content = button.closest('.dropdown')?.querySelector('.dropdown-content');
                  content?.classList.toggle('dropdown-content_show');
                },
              },
            }),
            content: [
              new Button({
                text: 'Добавить пользователя',
                attr: {
                  class: 'button_color_blue button_text_center button_flex-centered',
                },
                events: {
                  click: (event: Event) => {
                    event.preventDefault();
                  },
                },
              }),
              new Button({
                text: 'Удалить пользователя',
                attr: {
                  class: 'button_color_blue button_text_center button_flex-centered',
                },
                events: {
                  click: (event: Event) => {
                    event.preventDefault();
                  },
                },
              }),
              new Button({
                text: 'Удалить чат',
                attr: {
                  class: 'button_color_blue button_text_center button_flex-centered',
                },
                events: {
                  click: (event: Event) => {
                    event.preventDefault();

                    chatController.removeCurrent();
                  },
                },
              }),
            ],
          }),
        ],
        main: [],
        footer: [
          new Button({
            img: {
              src: attachmentButtonIconSrc,
              alt: 'Кнопка прикрепления файла для отправки в чат.',
            },
            attr: { title: 'Прикрепить файл' },
          }),
          new ChatDialogInput({ attr: { placeholder: 'Сообщение', name: 'message' } }),
          new Button({
            img: {
              src: sendButtonIconSrc,
              alt: 'Кнопка отправки сообщения в чат.',
            },
            attr: {
              class: 'button_color_blue button_circle',
              title: 'Отправить',
            },
          }),
        ],
      }),
      attr: { class: 'chat-page' },
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
