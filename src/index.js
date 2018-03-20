import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainPage from './containers/MainPage';
import registerServiceWorker from './registerServiceWorker';

import {
  createBrowserRouter,
  HttpError,
  makeRouteConfig,
  Redirect,
  Route,
} from 'found';

/* ... */

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route
      path="/"
      Component={App}
    >
      <Route
        Component={MainPage}
      />
    </Route>,
  ),

  renderError: ({ error }) => (
    <div>
      {error.status === 404 ? 'Not found' : 'Error'}
    </div>
  ),
});

ReactDOM.render(<BrowserRouter />, document.getElementById('root'));
registerServiceWorker();
