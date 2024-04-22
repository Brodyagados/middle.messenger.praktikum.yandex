import { IChatDialogMessage } from '../components/chat/chat-dialog/chat-dialog-message';
import Store from './Store';

declare global {
  interface Window {
    webSocket?: WebSocket;
  }
}

export enum TWsMessageType {
  MESSAGE = 'message',
  FILE = 'file',
  PING = 'ping'
};

export type TWsMessage = {
  type: TWsMessageType,
  content: string | Blob | number
}

const baseWsUrl = 'wss://ya-praktikum.tech/ws/chats';

const wsClient = (userId: number, chatId: number, token: string) => {
  const webSocket = new WebSocket(`${baseWsUrl}/${userId}/${chatId}/${token}`);

  webSocket.addEventListener('open', () => {
    console.log('Соединение установлено');

    webSocket.send(JSON.stringify({
      content: '0',
      type: 'get old',
    }));
  });

  const ping = setInterval(() => {
    webSocket.send(JSON.stringify({ type: TWsMessageType.PING }));
  }, 10000);

  webSocket.addEventListener('message', (event) => {
    try {
      console.log('Получены данные', event.data);
      const data = JSON.parse(event.data);

      if (['pong', 'user connected'].includes(data.type)) {
        return;
      }

      const currentMessages = Store.getState().chatPage.messages;
      const newMessages = (Array.isArray(data) ? data : [data]).map((message: IChatDialogMessage) => {
        const locale = 'ru-RU';
        const date = new Date(message.time);
        const time = (date.toLocaleDateString(locale) !== new Date().toLocaleDateString(locale)
          ? `${date.toLocaleDateString(locale)} `
          : '')
          + date.toLocaleTimeString(locale, { hour12: false, hour: 'numeric', minute: 'numeric' });
        const isOwner = message.user_id === Store.getState().user?.id;

        return { ...message, time, isOwner }
      });
      const messages = (Array.isArray(data)
        ? [...currentMessages, ...newMessages]
        : [...newMessages, ...currentMessages]);

      Store.set('chatPage.messages', messages);
    } catch {
      console.log('Невозможно обработать полученные данные', event.data);
    }
  });

  webSocket.addEventListener('error', (event) => {
    console.log('Ошибка', event);
  });

  webSocket.addEventListener('close', (event) => {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    clearInterval(ping);
  });

  return webSocket;
};

export default wsClient;
