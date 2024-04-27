import { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic, useFakeXMLHttpRequest } from 'sinon';
import ApiClient, { HttpMethod } from './ApiClient';
import { expect } from 'chai';

describe('Тестирование ApiClient', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    const requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = useFakeXMLHttpRequest();
        xhr.onCreate = (xhr: SinonFakeXMLHttpRequest) => {
            requests.push(xhr);
        };
    });

    afterEach(() => {
        xhr.restore();
    });

    it('ApiClient.get() должен иметь тип запроса "GET"', () => {
        ApiClient.get('/');
        const [request] = requests;

        expect(request.method).to.eq(HttpMethod.GET);
    })
});
