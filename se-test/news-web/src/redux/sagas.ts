import {
  newsFeedFail,
  newsFeedRequest,
  newsFeedStart,
  newsFeedSuccess,
  searchArticleRequest,
} from './slice';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { Article } from './types';
import { fetchNewsArticles, searchNewsArticles } from './api';
import { RootState } from './state';

function* newsFeedSaga() {
  try {
    yield put(newsFeedStart());
    const response: { articles: Article[] } = yield call(fetchNewsArticles);
    yield put(newsFeedSuccess(response.articles));
  } catch (error) {
    yield put(newsFeedFail(`An error occurred`));
  }
}

function* searchNewsSaga() {
  try {
    yield put(newsFeedStart());
    const key: string = yield select(
      (state: RootState) => state.news.searchTerm
    );
    const response: { articles: Article[] } = yield call(searchNewsArticles, key);
    yield put(newsFeedSuccess(response.articles));
  } catch (error) {
    yield put(newsFeedFail(`An error occurred`));
  }
}

function* rootSaga() {
  yield takeLatest(newsFeedRequest.type, newsFeedSaga);
  yield takeEvery(searchArticleRequest.type, searchNewsSaga);
}

export default rootSaga;
