import { IChatDialogMessage } from '../components/chat/chat-dialog/chat-dialog-message';
import Store from './Store';

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
    webSocket.send(JSON.stringify({ type: 'ping' }));
  }, 10000);

  webSocket.addEventListener('message', (event) => {
    try {
      console.log('Получены данные', event.data);
      const data = JSON.parse(event.data);

      if (['pong', 'user connected'].includes(data.type)) {
        return;
      }

      const currentMessages = Store.getState().chatPage.messages;
      Store.set(
        'chatPage.messages',
        [...currentMessages, ...data].sort((first: IChatDialogMessage, second: IChatDialogMessage) => first.id - second.id)
      )
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
