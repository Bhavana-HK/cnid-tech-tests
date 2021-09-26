import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsFeedRequest } from '../redux/slice';
import { RootState } from '../redux/state';
import { useFetch } from '../utils';
import { NewsContainer } from './NewsContainer';

export const NewsFeed: FC = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, lastResultCount } = useSelector(
    (app: RootState) => app.news.newsFeed
  );

  const requestItems = useCallback(
    (page) => {
      dispatch(newsFeedRequest({ page }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!articles.length) requestItems(1);
  }, [requestItems, articles]);

  useFetch(requestItems, loading, lastResultCount);

  return (
    <NewsContainer
      articles={articles}
      error={error}
      loading={loading}
      lastResultCount={lastResultCount}
    />
  );
};
