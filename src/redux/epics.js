import { combineEpics } from 'redux-observable';

import * as calculate from './slices/calculate';
import { getEpicsFromSlices } from './utils';

export default combineEpics(...getEpicsFromSlices([calculate]));
