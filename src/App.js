import React from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Root from './routes';

const history = createBrowserHistory();

const APP = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Root} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default APP;
