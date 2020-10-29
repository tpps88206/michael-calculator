import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CalculatorPage from '../pages/Calculator';
import NotFound from '../pages/NotFound';

const ErrorRouter = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url} component={CalculatorPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default ErrorRouter;
