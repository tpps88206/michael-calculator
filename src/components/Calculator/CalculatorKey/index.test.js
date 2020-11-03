import React from 'react';

import { render } from '../../../utils/test-utils';
import CalculatorKey from './index';

it('renders CalculatorKey without crashing', () => {
  const div = document.createElement('div');
  render(<CalculatorKey />, div);
});

it('renders CalculatorKey with snapshot', () => {
  const { asFragment } = render(<CalculatorKey />);
  expect(asFragment()).toMatchSnapshot();
});
