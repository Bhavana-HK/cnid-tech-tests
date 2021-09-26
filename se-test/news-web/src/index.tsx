import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { App } from './components/App';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
