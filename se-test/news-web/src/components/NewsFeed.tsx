import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsFeedRequest } from '../redux/slice';
import { RootState } from '../redux/state';
import { Article } from '../redux/types';
import { ArticleBox } from './ArticleBox';

export const NewsFeed: FC = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector(
    (app: RootState) => app.news.newsFeed
  );
  const requestItems = useCallback(
    () => dispatch(newsFeedRequest()),
    [dispatch]
  );

  useEffect(() => {
    requestItems();
  }, [requestItems]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error}</div>;
  if (!articles.length) return <div>No articles found!</div>;
  return (
    <>
      {articles.map((article: Article, index: number) => (
        <ArticleBox article={article} key={index} />
      ))}
    </>
  );
};
