import { Box, Link, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../redux/state';
import { getLorem, getFormattedTime } from '../utils';

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
        <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {getFormattedTime(publishedAt)}
        </Typography>
        <Box sx={{ my: 3 }}>
          <img
            src={urlToImage}
            alt={''}
            style={{ height: '100%', width: '100%' }}
          />
        </Box>
        <Typography variant="body1" sx={{ my: 3 }}>
          {content}
        </Typography>
        <Typography variant="body1" sx={{ my: 3 }}>
          {getLorem()}
        </Typography>
        <Typography variant="body1" sx={{ my: 3 }}>
          {getLorem()}
        </Typography>
        <Typography variant="subtitle2">
          {`By ${author},  from ${source.name}`}
        </Typography>
        <br/>
        <Link href={url} target="_blank" sx={{ my: 5 }} color="text.primary">
          Read full story here
        </Link>
      </Box>
    );
  }
};
