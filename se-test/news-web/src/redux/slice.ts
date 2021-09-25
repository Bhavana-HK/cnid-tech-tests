import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsState, Article } from './types';

// Define the initial state using that type
const initialState: NewsState = {
  newsFeed: {
    articles: [],
    error: null,
    loading: false,
  },
  searchTerm: '',
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
      state.newsFeed.articles = payload;
      state.newsFeed.error = null;
      state.newsFeed.loading = false;
    },
    newsFeedFail: (state: NewsState, { payload }: PayloadAction<string>) => {
      state.newsFeed.error = payload;
      state.newsFeed.loading = false;
    },
    setSearchTerm: (state: NewsState, { payload }: PayloadAction<string>) => {
      state.searchTerm = payload;
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
  setSearchTerm,
  setCurrentArticle,
} = newsSlice.actions;

export const newsFeedRequest = createAction('saga/newsFeedRequest');
export const searchArticleRequest = createAction('saga/searchArticleRequest');

export default newsSlice.reducer;
