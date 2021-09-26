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
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Article } from './types';
import { fetchNewsArticles, searchNewsArticles } from './api';
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

function* searchNewsSaga({
  payload,
}: PayloadAction<{ key: string; page: number }>) {
  try {
    yield put(searchFeedStart());
    const { key, page } = payload;
    const response: { articles: Article[] } = yield call(
      searchNewsArticles,
      key,
      page
    );
    yield put(
      searchFeedSuccess({ articles: response.articles, searchKey: key })
    );
  } catch (error) {
    yield put(searchFeedFail(`An error occurred`));
  }
}

function* rootSaga() {
  yield takeLatest(newsFeedRequest.type, newsFeedSaga);
  yield takeEvery(searchArticleRequest.type, searchNewsSaga);
}

export default rootSaga;
