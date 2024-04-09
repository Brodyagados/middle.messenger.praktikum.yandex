import ApiClient from '../utils/ApiClient';
import { BaseAPI } from './base-api';

class AuthAPI extends BaseAPI {
  _authUrl: string;

  constructor() {
    super();
    this._authUrl = `${this._baseUrl}/auth`;
  }

  signUp(data: Record<string, unknown>) {
    return ApiClient.post(`${this._authUrl}/signup`, { data });
  }

  signIn(data: Record<string, unknown>) {
    return ApiClient.post(`${this._authUrl}/signin`, { data });
  }

  user() {
    return ApiClient.get(`${this._authUrl}/user`);
  }

  logout() {
    return ApiClient.post(`${this._authUrl}/logout`);
  }
}

export default new AuthAPI();
