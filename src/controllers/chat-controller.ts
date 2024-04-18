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
}

export default new ChatController();
