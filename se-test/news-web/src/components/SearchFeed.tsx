import { Alert } from '@mui/material';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticleRequest } from '../redux/slice';
import { RootState } from '../redux/state';
import { useFetch, useQuery } from '../utils';
import { NewsContainer } from './NewsContainer';

export const SearchFeed: FC = () => {
  const dispatch = useDispatch();
  const { articles, loading, error, lastResultCount } = useSelector(
    (app: RootState) => app.news.searchFeed
  );
  const [lastSearched, setLastSearched] = useState('');
  const query = useQuery();
  const key = query.get('term');

  const requestItems = useCallback((page) => {
    if (key && key.length > 0) {
      dispatch(searchArticleRequest({ key, page }));
      setLastSearched(key);
    }
  }, [setLastSearched, dispatch, key]);

  useEffect(() => {
    if (key !== lastSearched && !articles.length) requestItems(1);
  }, [requestItems, key, lastSearched, articles]);

  useFetch(requestItems, loading, lastResultCount);

  if (!key)
    return <Alert color="warning">Please enter a valid search term</Alert>;
  return <NewsContainer articles={articles} error={error} loading={loading} lastResultCount={lastResultCount}/>;
};
