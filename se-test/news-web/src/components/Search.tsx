import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { FC, FormEventHandler, useCallback, useEffect, useState } from 'react';
import { InputAdornment } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useHistory } from 'react-router';
import { useQuery } from '../utils';

export const Search: FC = () => {
  const query = useQuery();
  const key = query.get('term');
  const [value, setValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    console.log('in search term', key);
    if (key) setValue(key);
  }, [key]);

  const handleSearch: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      history.push('/search?term=' + encodeURI(value));
    },
    [value]
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      setValue(target.value);
    },
    [setValue]
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
        value={value}
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
