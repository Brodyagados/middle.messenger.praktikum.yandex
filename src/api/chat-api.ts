import ApiClient from '../utils/ApiClient';
import { BaseAPI } from './base-api';

class ChatAPI extends BaseAPI {
    _chatUrl: string;

    constructor() {
        super();
        this._chatUrl = `${BaseAPI.baseUrl}/chats`;
    }

    createChat(data: Record<string, unknown>) {
        return ApiClient.post(`${this._chatUrl}`, { data });
    }
}

export default new ChatAPI();
