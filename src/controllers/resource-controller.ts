import ResourceApi from '../api/resource-api';

class ResourceController {
  async upload(file: File) {
    try {
      const formData = new FormData();
      formData.append('resource', file);
      const request = await ResourceApi.upload(formData) as XMLHttpRequest;
      const { response, status, responseText } = request;

      if (status === 200) {
        const { id } = JSON.parse(response);
        return id;
      } else {
        throw Error(responseText);
      }
    } catch (e) {
      const errorMessage = 'Ошибка загрузки файла.';
      throw Error(errorMessage);
    }
  }
}

export default new ResourceController();
