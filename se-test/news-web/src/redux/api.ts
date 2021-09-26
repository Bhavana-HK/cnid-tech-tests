import axios, { AxiosRequestConfig } from 'axios';
import { baseUrl, endpoints } from '../constants';

const request = (payload: AxiosRequestConfig) => {
  return axios.request(payload).then(({ data }) => data);
};

export const fetchNewsArticles = (page = 1) => {
  const payload: AxiosRequestConfig = {
    url: baseUrl + endpoints.latest,
    params: { page },
    method: 'GET',
  };
  return request(payload);
};

export const searchNewsArticles = (key: string, page = 1) => {
  const payload: AxiosRequestConfig = {
    url: baseUrl + endpoints.search,
    params: { key, page },
    method: 'GET',
  };
  return request(payload);
};
