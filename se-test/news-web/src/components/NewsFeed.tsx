import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsFeedRequest } from '../redux/slice';
import { RootState } from '../redux/state';
import { NewsContainer } from './NewsContainer';

export const NewsFeed: FC = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { articles, loading, error, lastResultCount } = useSelector(
    (app: RootState) => app.news.newsFeed
  );

  const requestItems = useCallback(
    (page) => {
      dispatch(newsFeedRequest({ page }));
    },
    [dispatch, page]
  );

  useEffect(() => {
    if (!articles.length) requestItems(1);
  }, [requestItems, articles]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight &&
        lastResultCount && !loading
      ) {
        const newPage = page + 1;
        setPage(newPage);
        requestItems(newPage);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setPage, page, lastResultCount, loading]);

  return <NewsContainer articles={articles} error={error} loading={loading} lastResultCount={lastResultCount} />;
};
