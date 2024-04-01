import { Avatar, Button, ChatDialogInput, ChatDialogMessage,
  ChatDialogUser,
  ChatListAccountLink, ChatListHeader, ChatListItem,
} from '../../components';
import additionalButtonIconSrc from '../../assets/icons/vertical-dotes.svg';
import attachmentButtonIconSrc from '../../assets/icons/attachment.svg';
import sendButtonIconSrc from '../../assets/icons/arrow-right.svg';
import Page, { IChatListItem, IChatMessage } from './chat-page';

export const ChatPage = (chats: IChatListItem[], chatDialogMessages: IChatMessage[]) => {
  const context = (chats: IChatListItem[], chatDialogMessages: IChatMessage[]) => {
    return {
      dialog: {
        header: [
          new Avatar({ attr: { alt: 'Аватар текущего чата.' } }),
          new ChatDialogUser({ text: 'Вадим' }),
          new Button({
            img: {
              src: additionalButtonIconSrc,
              alt: 'Кнопка открытия меню дополнительных действий с чатом.',
            },
            attr: { title: 'Дополнительно' },
          }),
        ],
        main: chatDialogMessages.map((message) => new ChatDialogMessage(message)),
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
      },
      list: {
        accountLink: new ChatListAccountLink(),
        header: new ChatListHeader(),
        items: chats.map((item) => new ChatListItem(item)),
      },
    };
  };

  return new Page(context(chats, chatDialogMessages)).getContent();
};
