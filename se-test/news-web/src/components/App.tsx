import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FC, useCallback } from 'react';
import { NewsFeed } from './NewsFeed';
import { Search } from './Search';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Story } from './Story';
import { SearchFeed } from './SearchFeed';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const App: FC = () => {
  const history = useHistory();
  const handleHeaderClick = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, mb: 5 }}>
        <Box display="flex">
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            flex={'1'}
            onClick={handleHeaderClick}
            sx={{ cursor: 'pointer' }}
          >
            <ImportContactsIcon sx={{ fontSize: 30 }} /> News Application
          </Typography>
          <Search />
        </Box>
        <Switch>
          <Route path="/" exact component={NewsFeed} />
          <Route path="/article" component={Story} />
          <Route path="/search" component={SearchFeed} />
        </Switch>
      </Box>
    </Container>
  );
};
