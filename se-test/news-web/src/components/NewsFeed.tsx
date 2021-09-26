import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsFeedRequest } from '../redux/slice';
import { RootState } from '../redux/state';
import { NewsContainer } from './NewsContainer';

export const NewsFeed: FC = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector(
    (app: RootState) => app.news.newsFeed
  );
  const requestItems = useCallback(() => {
    if (!articles.length) dispatch(newsFeedRequest());
  }, [dispatch]);

  useEffect(() => {
    requestItems();
  }, [requestItems]);

  return <NewsContainer articles={articles} error={error} loading={loading} />;
};
