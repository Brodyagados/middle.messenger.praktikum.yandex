type THttpMethod = (url: string, options?: IOptions) => Promise<unknown>;

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

interface IOptions {
  method?: HttpMethod,
  headers?: Record<string, string>,
  data?: Record<string, unknown> | FormData,
  timeout?: number,
  withCredentials?: boolean
}

function queryStringify(data: Record<string, unknown>) {
  return Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

class ApiClient {
  get: THttpMethod = (url, options = {}) => {
    const { data, timeout } = options;
    const resultUrl = data && !(data instanceof FormData)
      ? `${url}?${queryStringify(data)}`
      : url;
    return this.request(resultUrl, { ...options, method: HttpMethod.GET }, timeout);
  };

  post: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: HttpMethod.POST }, options.timeout);
  };

  put: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: HttpMethod.PUT }, options.timeout);
  };

  delete: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: HttpMethod.DELETE }, options.timeout);
  };

  request = (url: string, options: IOptions = {}, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const { method, data, withCredentials = true, headers = {} } = options;

      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => resolve(xhr);
      xhr.withCredentials = withCredentials;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.onabort = reject;
      xhr.onerror = reject;

      if (method === HttpMethod.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default new ApiClient();
