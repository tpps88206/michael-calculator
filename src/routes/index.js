import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Progress from '../components/Progress';

const CalculatorRouter = lazy(() => import('./calculator'));

const Router = () => {
  return (
    <Suspense fallback={<Progress message="Loading..." />}>
      <Switch>
        <Route path="/" component={CalculatorRouter} />
      </Switch>
    </Suspense>
  );
};

export default Router;
