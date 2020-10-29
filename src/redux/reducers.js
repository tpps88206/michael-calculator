import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import calculate from './slices/calculate';

export default history =>
  combineReducers({
    router: connectRouter(history),
    calculate,
  });
