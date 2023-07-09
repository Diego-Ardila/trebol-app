import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import TemplateJSON from './Template.json';

export const api: AxiosInstance = axios.create({
  paramsSerializer: {
    indexes: null
  }
});
const mock: MockAdapter = new MockAdapter(api, { delayResponse: 5000 });

mock.onPost('/api/enterprise').reply((config) => {  
  return [400, {enterprise: TemplateJSON}]
})