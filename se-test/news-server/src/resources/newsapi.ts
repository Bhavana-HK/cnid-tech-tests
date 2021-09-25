import { API_KEY } from '../constants';
import {
    Article,
    NewsApiEverythingParams,
    NewsApiResponse,
    NewsApiTopHeadlinesParams,
} from '../types';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(API_KEY);

export const getTopHeadlines = (
    params: NewsApiTopHeadlinesParams
): Promise<Article[]> => {
    return newsapi.v2.topHeadlines(params).then((response: NewsApiResponse) => {
        if (response.status === 'ok') return response.articles;
        else throw new Error(response.error);
    });
};

export const getEverythingNews = (
    params: NewsApiEverythingParams
): Promise<Article[]> => {
    return newsapi.v2
        .everything(params)
        .then((response: NewsApiResponse) => {
            if (response.status === 'ok') return response.articles;
            else throw new Error(response.error);
        })
};

/* export const getNewsFromSources = (
  params: NewsApiParams
): Promise<NewsApiResponse> => {
  return newsapi.v2.sources(params).then((response: NewsApiResponse) => {
      return response;
  });
}; */
