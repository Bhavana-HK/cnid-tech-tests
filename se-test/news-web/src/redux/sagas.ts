import {
  newsFeedFail,
  newsFeedRequest,
  newsFeedStart,
  newsFeedSuccess,
  searchArticleRequest,
  searchFeedFail,
  searchFeedStart,
  searchFeedSuccess,
} from './slice';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { Article } from './types';
import { fetchNewsArticles, searchNewsArticles } from './api';
import { RootState } from './state';
import { PayloadAction } from '@reduxjs/toolkit';

function* newsFeedSaga({ payload }: PayloadAction<{ page: number }>) {
  try {
    yield put(newsFeedStart());
    const { page = 1 } = payload;
    const response: { articles: Article[] } = yield call(
      fetchNewsArticles,
      page
    );
    yield put(newsFeedSuccess(response.articles));
  } catch (err) {
    const error: any = err;
    yield put(
      newsFeedFail(error?.response?.data?.error || 'An error occurred')
    );
  }
}

function* searchNewsSaga({ payload }: PayloadAction<{ key: string }>) {
  try {
    yield put(searchFeedStart());
    const { key } = payload;
    const response: { articles: Article[] } = yield call(
      searchNewsArticles,
      key
    );
    yield put(searchFeedSuccess(response.articles));
  } catch (error) {
    yield put(searchFeedFail(`An error occurred`));
  }
}

function* rootSaga() {
  yield takeLatest(newsFeedRequest.type, newsFeedSaga);
  yield takeEvery(searchArticleRequest.type, searchNewsSaga);
}

export default rootSaga;
