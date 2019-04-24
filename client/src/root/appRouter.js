import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import App from '@containers/App';
import App2 from '@containers/App2';
import store from './rootStore';

const history = createBrowserHistory();

const AppRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/app2" component={App2} />
      </Switch>
    </Router>
  </Provider>
);

export default AppRouter;
