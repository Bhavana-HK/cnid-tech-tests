import { combineReducers } from '@reduxjs/toolkit';
import newsReducer from './slice';

export const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
