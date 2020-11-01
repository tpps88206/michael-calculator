import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';

import Progress from '../components/Progress';
import configureStore, { history } from '../redux/configureStore';

const store = configureStore();
const CalculatorRouter = lazy(() => import('./calculator'));

const Switcher = () => {
  return (
    <Suspense fallback={<Progress message="Loading..." />}>
      <Switch>
        <Route path="/" component={CalculatorRouter} />
      </Switch>
    </Suspense>
  );
};

const BaseRouter = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switcher />
      </ConnectedRouter>
    </Provider>
  );
};

export default BaseRouter;
