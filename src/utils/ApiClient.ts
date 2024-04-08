type THttpMethod = (url: string, options?: IOptions) => Promise<unknown>;

enum METHOD {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

interface IOptions {
    method?: METHOD,
    headers?: Record<string, string>,
    data?: Record<string, unknown>,
    timeout?: number
}

function queryStringify(data: Record<string, unknown>) {
  return Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

class ApiClient {
  get: THttpMethod = (url, options = {}) => {
    const { data, timeout } = options;
    const resultUrl = data
      ? `${url}?${queryStringify(data)}`
      : url;
    return this.request(resultUrl, { ...options, method: METHOD.GET }, timeout);
  };

  post: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHOD.POST }, options.timeout);
  };

  put: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHOD.PUT }, options.timeout);
  };

  delete: THttpMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: METHOD.DELETE }, options.timeout);
  };

  request = (url: string, options: IOptions = {}, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const { method, data, headers = {} } = options;

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

      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.onabort = reject;
      xhr.onerror = reject;

      if (method === METHOD.GET || !data) {
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
