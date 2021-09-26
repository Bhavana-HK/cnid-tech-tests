import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { FC, FormEventHandler, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchArticleRequest, setSearchTerm } from '../redux/slice';
import { InputAdornment } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Search: FC = () => {
  const dispatch = useDispatch();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      dispatch(setSearchTerm(target.value));
    },
    [dispatch]
  );

  const handleSearch: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(searchArticleRequest());
    },
    [dispatch]
  );

  return (
    <Paper
      component="form"
      sx={{
        width: 200,
        boxShadow: 'none',
        borderRadius: 'none',
      }}
      onSubmit={handleSearch}
    >
      <InputBase
        sx={{ border: 'none', borderBottom: 1, borderBottomColor: grey['400'] }}
        placeholder="Search Articles"
        fullWidth
        inputProps={{ 'aria-label': 'search articles' }}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Paper>
  );
};
