import chatApi from '../api/chat-api';
import Store from '../utils/Store';

class ChatController {
    async create(data: Record<string, unknown>) {
        try {
            const request = await chatApi.createChat(data) as XMLHttpRequest;
            const { status, responseText } = request;

            if (status === 200) {
                //TODO: добавить метод получения списка чатов
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
