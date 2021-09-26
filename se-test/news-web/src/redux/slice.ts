import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsState, Article } from './types';

// Define the initial state using that type
const initialState: NewsState = {
  newsFeed: {
    articles: [],
    error: null,
    loading: false,
  },
  searchFeed: {
    articles: [],
    error: null,
    loading: false,
  },
  currentArticle: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsFeedStart: (state: NewsState) => {
      state.newsFeed.loading = true;
    },
    newsFeedSuccess: (
      state: NewsState,
      { payload }: PayloadAction<Article[]>
    ) => {
      state.newsFeed.articles = [...state.newsFeed.articles, ...payload];
      state.newsFeed.error = null;
      state.newsFeed.loading = false;
      state.newsFeed.lastResultCount = payload.length;
    },
    newsFeedFail: (state: NewsState, { payload }: PayloadAction<string>) => {
      state.newsFeed.error = payload;
      state.newsFeed.loading = false;
    },
    searchFeedStart: (state: NewsState) => {
      state.searchFeed.loading = true;
    },
    searchFeedSuccess: (
      state: NewsState,
      { payload }: PayloadAction<Article[]>
    ) => {
      state.searchFeed.articles =  [...state.searchFeed.articles, ...payload];
      state.searchFeed.error = null;
      state.searchFeed.loading = false;
      state.searchFeed.lastResultCount = payload.length;
    },
    searchFeedFail: (state: NewsState, { payload }: PayloadAction<string>) => {
      state.searchFeed.error = payload;
      state.searchFeed.loading = false;
    },
    setCurrentArticle: (
      state: NewsState,
      { payload }: PayloadAction<Article | null>
    ) => {
      state.currentArticle = payload;
    },
  },
});

export const {
  newsFeedStart,
  newsFeedFail,
  newsFeedSuccess,
  setCurrentArticle,
  searchFeedFail,
  searchFeedStart,
  searchFeedSuccess,
} = newsSlice.actions;

export const newsFeedRequest = createAction<{ page: number }>(
  'saga/newsFeedRequest'
);
export const searchArticleRequest = createAction<{ key: string, page:number }>(
  'saga/searchArticleRequest'
);

export default newsSlice.reducer;
