import { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic, useFakeXMLHttpRequest } from 'sinon';
import { expect } from 'chai';
import ApiClient, { HttpMethod } from './ApiClient';

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
  });
});
