import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Article } from '../redux/types';
import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentArticle } from '../redux/slice';
import { useHistory } from 'react-router';
import { getFormattedTime } from '../utils';

export const ArticleBox: FC<{ article: Article }> = ({ article }) => {
  const { description, publishedAt, title, urlToImage } = article;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = useCallback(() => {
    dispatch(setCurrentArticle(article));
    history.push('/article');
  }, [dispatch, article, history]);
  return (
    <Grid item xs={12} md={6} xl={4}>
      <CardActionArea component="a" onClick={handleClick}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {getFormattedTime(publishedAt)}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={urlToImage}
            alt={''}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};
