enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
};

interface IOptions {
    method?: HttpMethod,
    headers?: Record<string, string>,
    data?: Record<string, unknown>,
    timeout?: number
}

function queryStringify(data: Record<string, unknown>) {
    return Object.entries(data)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
}

export default class ApiClient {
    get = (url: string, options: IOptions = {}) => {
        const { data, timeout } = options;
        const resultUrl = !!data
            ? `${url}?${queryStringify(data)}`
            : url;
        return this.request(resultUrl, { ...options, method: HttpMethod.GET }, timeout);
    };

    post = (url: string, options: IOptions = {}) => {
        return this.request(url, { ...options, method: HttpMethod.POST }, options.timeout);
    };

    put = (url: string, options: IOptions = {}) => {
        return this.request(url, { ...options, method: HttpMethod.PUT }, options.timeout);
    };

    delete = (url: string, options: IOptions = {}) => {
        return this.request(url, { ...options, method: HttpMethod.DELETE }, options.timeout);
    };

    request = (url: string, options: IOptions = {}, timeout = 5000) => {
        return new Promise((resolve, reject) => {
            const { method, data, headers = {} } = options;

            if (!method) {
                reject('No method');
                return
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

            method === HttpMethod.GET || !!data
                ? xhr.send()
                : xhr.send(data);
        })
    };
}
