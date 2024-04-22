import chatApi from '../api/chat-api';
import Store from '../utils/Store';
import { TWsMessage, TWsMessageType } from '../utils/WsClient';

class ChatController {
  async getList() {
    try {
      const { response } = await chatApi.getChats() as XMLHttpRequest;
      const chats = JSON.parse(response);

      Store.set('chatPage.list', chats);
    } catch (e) {
      const errorMessage = 'Ошибка получения данных пользователя.';
      throw Error(errorMessage);
    }
  }

  async create(data: Record<string, unknown>) {
    try {
      const request = await chatApi.createChat(data) as XMLHttpRequest;
      const { status, responseText } = request;

      if (status === 200) {
        this.getList();
        Store.set('chatPage.error', '');
      } else {
        Store.set('chatPage.error', responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка создания чата.';
      Store.set('chatPage.error', errorMessage);
      throw Error(errorMessage);
    }
  }

  async removeCurrent() {
    try {
      const { current } = Store.getState().chatPage;
      if (!current) {
        alert('Удалить можно только текущий чат.');
      }

      const request = await chatApi.removeChat(current.id) as XMLHttpRequest;
      const { status, responseText } = request;

      if (status === 200) {
        this.getList();
        Store.set('chatPage.current', {});
      } else {
        alert(responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка удаления чата.';
      alert(errorMessage);
      throw Error(errorMessage);
    }
  }

  async addUsers(users: number[]) {
    try {
      const { current } = Store.getState().chatPage;
      if (!current) {
        alert('Добавить пользователя можно только в текущий чат.');
      }

      const request = await chatApi.addUsers({ users, chatId: current.id }) as XMLHttpRequest;
      const { status, responseText } = request;

      if (status === 200) {
        Store.set('chatPage.error', '');
      } else {
        Store.set('chatPage.error', responseText);
        throw Error(responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка добавления пользователя в чат.';
      Store.set('chatPage.error', errorMessage);
      throw Error(errorMessage);
    }
  }

  async removeUsers(users: number[]) {
    try {
      const { current } = Store.getState().chatPage;
      if (!current) {
        alert('Удалить пользователя можно только из текущего чата.');
      }

      const request = await chatApi.removeUsers({ users, chatId: current.id }) as XMLHttpRequest;
      const { status, responseText } = request;

      if (status === 200) {
        Store.set('chatPage.error', '');
      } else {
        Store.set('chatPage.error', responseText);
        throw Error(responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка удаления пользователя из чата.';
      Store.set('chatPage.error', errorMessage);
      throw Error(errorMessage);
    }
  }

  async getToken() {
    try {
      const chatId = Store.getState().chatPage.current?.id;
      if (!chatId) {
        return;
      }

      const { response } = await chatApi.getToken(chatId) as XMLHttpRequest;
      const { token } = JSON.parse(response);

      return token;
    } catch (e) {
      const errorMessage = 'Ошибка получения токена чата.';
      throw Error(errorMessage);
    }
  }

  async connect() {
    try {
      const token = await this.getToken();
      const { chatPage: { current }, user } = Store.getState();
      Store.set('chatPage.messages', []);

      window.webSocket?.close();
      window.webSocket = chatApi.connect(user.id, current.id, token);
    } catch (error) {
      console.log(error);
    }
  }

  sendMessage(message?: string) {
    if (!message) {
      return;
    }

    const data: TWsMessage = {
      type: TWsMessageType.MESSAGE,
      content: message
    };

    window.webSocket?.send(JSON.stringify(data));
  }
}

export default new ChatController();
