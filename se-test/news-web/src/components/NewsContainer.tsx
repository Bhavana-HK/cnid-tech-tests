import { Alert, Grid } from '@mui/material';
import { FC } from 'react';
import { Article, Feed } from '../redux/types';
import { ArticleBox } from './ArticleBox';

export const NewsContainer: FC<Feed> = ({ articles, loading, error }) => {
  if (loading) return <Alert severity="info">Loading...</Alert>;
  if (error) return <Alert severity="error">Error! {error}</Alert>;
  if (!articles.length)
    return <Alert severity="warning">No articles found!</Alert>;
  return (
    <Grid container spacing={2}>
      {articles.map((article: Article, index: number) => (
        <ArticleBox article={article} key={index} />
      ))}
    </Grid>
  );
};
