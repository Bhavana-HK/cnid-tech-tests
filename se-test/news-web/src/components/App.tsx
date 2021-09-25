import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FC } from 'react';
import { NewsFeed } from './NewsFeed';

export const App: FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          News Application
        </Typography>
        <NewsFeed />
      </Box>
    </Container>
  );
};
