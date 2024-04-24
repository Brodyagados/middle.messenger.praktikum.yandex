import ApiClient from '../utils/ApiClient';
import { BaseAPI } from './base-api';

class ResourceAPI extends BaseAPI {
  _resourseUrl: string;

  constructor() {
    super();
    this._resourseUrl = `${BaseAPI.baseUrl}/resources`;
  }

  upload(data: FormData) {
    return ApiClient.post(this._resourseUrl, { data });
  }
}

export default new ResourceAPI();
