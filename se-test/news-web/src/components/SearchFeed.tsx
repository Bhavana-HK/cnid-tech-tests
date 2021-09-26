import { Alert } from '@mui/material';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticleRequest } from '../redux/slice';
import { RootState } from '../redux/state';
import { useQuery } from '../utils';
import { NewsContainer } from './NewsContainer';

export const SearchFeed: FC = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector(
    (app: RootState) => app.news.searchFeed
  );
  const [lastSearched, setLastSearched] = useState('');
  const query = useQuery();
  const key = query.get('term');

  const requestItems = useCallback(() => {
    if (key && key.length > 0) {
      dispatch(searchArticleRequest({ key }));
      setLastSearched(key);
    }
  }, [setLastSearched, dispatch, key]);

  useEffect(() => {
    if (key !== lastSearched && !articles) requestItems();
  }, [requestItems, key, lastSearched, articles]);

  if (!key)
    return <Alert color="warning">Please enter a valid search term</Alert>;
  return <NewsContainer articles={articles} error={error} loading={loading} />;
};
