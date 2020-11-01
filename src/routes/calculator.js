import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AppFrame from '../components/AppFrame';
import CalculatorPage from '../pages/Calculator';
import NotFound from '../pages/NotFound';

const ErrorRouter = () => {
  const { url } = useRouteMatch();
  return (
    <AppFrame>
      <Switch>
        <Route exact path={url} component={CalculatorPage} />
        <Route component={NotFound} />
      </Switch>
    </AppFrame>
  );
};

export default ErrorRouter;
