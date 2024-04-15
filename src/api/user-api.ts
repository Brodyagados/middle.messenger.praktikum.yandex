import ApiClient from '../utils/ApiClient';
import { BaseAPI } from './base-api';

class UserAPI extends BaseAPI {
  _userUrl: string;

  constructor() {
    super();
    this._userUrl = `${this._baseUrl}/user`;
  }

  updateSettings(data: Record<string, unknown>) {
    return ApiClient.put(`${this._userUrl}/profile`, { data });
  }

  updateAvatar(data: Record<string, unknown>) {
    return ApiClient.put(`${this._userUrl}/profile/avatar`, { data });
  }

  changePassword(data: Record<string, unknown>) {
    return ApiClient.put(`${this._userUrl}/password`, { data });
  }

  searchUserByLogin(data: Record<string, unknown>) {
    return ApiClient.post(`${this._userUrl}/search`, { data });
  }
}

export default new UserAPI();
