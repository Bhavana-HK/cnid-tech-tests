import { Alert, Grid } from '@mui/material';
import { FC } from 'react';
import { Article, Feed } from '../redux/types';
import { ArticleBox } from './ArticleBox';

export const NewsContainer: FC<Feed> = ({
  articles,
  loading,
  error,
  lastResultCount,
}) => {
  if (!articles.length && !loading)
    return (
      <Alert severity="warning" sx={{ my: 3 }}>
        No articles found!
      </Alert>
    );
  return (
    <>
      <Grid container spacing={2}>
        {articles.map((article: Article, index: number) => (
          <ArticleBox article={article} key={index} />
        ))}
      </Grid>
      {loading && (
        <Alert severity="info" sx={{ my: 3 }}>
          Loading...
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ my: 3 }}>
          Error! {error}
        </Alert>
      )}
      {!!articles.length && lastResultCount === 0 && (
        <Alert severity="info" sx={{ my: 3 }}>
          No more articles left to be displayed
        </Alert>
      )}
    </>
  );
};
