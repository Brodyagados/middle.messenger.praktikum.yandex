import { Avatar, Button } from '../../components';
import additionalButtonIconSrc from '../../assets/icons/vertical-dotes.svg'
import attachmentButtonIconSrc from '../../assets/icons/attachment.svg'
import sendButtonIconSrc from '../../assets/icons/arrow-right.svg'
import { ChatDialogInput } from '../../components/chat/chat-dialog/chat-dialog-input';
import Page, { IChatListItem, IChatMessage } from './chat-page';
import { ChatDialogMessage } from '../../components/chat/chat-dialog/chat-dialog-message';
import { ChatListAccountLink, ChatListHeader, ChatListItem } from '../../components/chat/chat-list';

const context = (chats: IChatListItem[], chatDialogMessages: IChatMessage[]) => {
  return {
    dialog: {
      header: [
        new Avatar({ alt: 'Аватар текущего чата.' }).render(),
        '<div class="chat-user">Вадим</div>',
        new Button({
          img: {
            src: additionalButtonIconSrc,
            alt: 'Кнопка открытия меню дополнительных действий с чатом.'
          },
          title: 'Дополнительно'
        }).render()
      ],
      main: chatDialogMessages.map((message) => new ChatDialogMessage(message).render()),
      footer: [
        new Button({
          img: {
            src: attachmentButtonIconSrc,
            alt: 'Кнопка прикрепления файла для отправки в чат.'
          },
          title: 'Прикрепить файл'
        }).render(),
        new ChatDialogInput().render(),
        new Button({
          img: {
            src: sendButtonIconSrc,
            alt: 'Кнопка отправки сообщения в чат.'
          },
          class: 'button_color_blue button_circle',
          title: 'Отправить'
        }).render()
      ]
    },
    list: {
      accountLink: new ChatListAccountLink().render(),
      header: new ChatListHeader().render(),
      items: chats.map((item) => new ChatListItem(item).render()).join('')
    }
  }
};

export const ChatPage = (chats: IChatListItem[], chatDialogMessages: IChatMessage[]) => (
  new Page(context(chats, chatDialogMessages)).render()
);
