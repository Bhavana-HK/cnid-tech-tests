import { Box, Divider, Link, Paper, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../redux/state';
import { getLorem } from '../utils';

export const Story: FC = () => {
  const article = useSelector((state: RootState) => state.news.currentArticle);
  
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  if (article === null) return <Redirect to="/" />;
  
  else {
    const { author, content, publishedAt, source, title, url, urlToImage } =
      article;
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {publishedAt}
        </Typography>
        <Paper>
          <img
            src={urlToImage}
            alt={''}
            style={{ height: '100%', width: '100%' }}
          />
        </Paper>
        <Divider />
        <Typography variant="body1">{content}</Typography>
        <Typography variant="body1">{getLorem()}</Typography>
        <Typography variant="body1">{getLorem()}</Typography>
        <Typography variant="subtitle2">
          {`By ${author}. From ${source.name}`}
        </Typography>
        <Link href={url} target="_blank">
          Read full story here
        </Link>
      </Box>
    );
  }
};
