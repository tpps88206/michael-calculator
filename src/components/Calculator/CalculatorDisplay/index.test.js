import React from 'react';

import { render } from '../../../utils/test-utils';
import CalculatorDisplay from './index';

it('renders CalculatorDisplay without crashing', () => {
  const div = document.createElement('div');
  render(<CalculatorDisplay />, div);
});

it('renders CalculatorDisplay with snapshot', () => {
  const { asFragment } = render(<CalculatorDisplay />);
  expect(asFragment()).toMatchSnapshot();
});
