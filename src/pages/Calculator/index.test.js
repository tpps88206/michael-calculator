import React from 'react';

import { render } from '../../utils/test-utils';
import CalculatorPage from './index';

it('renders CalculatorPage without crashing', () => {
  const div = document.createElement('div');
  render(<CalculatorPage />, div);
});

it('renders CalculatorPage with snapshot', () => {
  const { asFragment } = render(<CalculatorPage />);
  expect(asFragment()).toMatchSnapshot();
});
