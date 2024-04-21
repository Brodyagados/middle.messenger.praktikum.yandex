import ApiClient from '../utils/ApiClient';
import { BaseAPI } from './base-api';

class ChatAPI extends BaseAPI {
  _chatUrl: string;

  constructor() {
    super();
    this._chatUrl = `${BaseAPI.baseUrl}/chats`;
  }

  getChats() {
    return ApiClient.get(`${this._chatUrl}`);
  }

  createChat(data: Record<string, unknown>) {
    return ApiClient.post(`${this._chatUrl}`, { data });
  }

  removeChat(chatId: number) {
    return ApiClient.delete(`${this._chatUrl}`, { data: { chatId } });
  }

  addUsers(data: Record<string, unknown>) {
    return ApiClient.put(`${this._chatUrl}/users`, { data });
  }

  removeUsers(data: Record<string, unknown>) {
    return ApiClient.delete(`${this._chatUrl}/users`, { data });
  }
}

export default new ChatAPI();
