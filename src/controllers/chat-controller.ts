import chatApi from '../api/chat-api';
import Store from '../utils/Store';

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
}

export default new ChatController();
