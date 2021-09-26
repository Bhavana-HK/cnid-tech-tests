import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FC, useCallback } from 'react';
import { NewsFeed } from './NewsFeed';
import { Search } from './Search';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Main } from './Main';

export const App: FC = () => {
  const history = useHistory();
  const handleHeaderClick = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box display="flex">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            flex={'1'}
            onClick={handleHeaderClick}
          >
            News Application
          </Typography>
          <Search />
        </Box>
        <Switch>
          <Route path="/" exact component={NewsFeed} />
          <Route path="/article" component={Main} />
          <Route path="/search" component={NewsFeed} />
        </Switch>
      </Box>
    </Container>
  );
};
