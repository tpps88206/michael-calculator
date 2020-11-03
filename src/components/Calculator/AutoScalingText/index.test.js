import React from 'react';

import { render } from '../../../utils/test-utils';
import AutoScalingText from './index';

it('renders AutoScalingText without crashing', () => {
  const div = document.createElement('div');
  render(<AutoScalingText />, div);
});

it('renders AutoScalingText with snapshot', () => {
  const { asFragment } = render(<AutoScalingText />);
  expect(asFragment()).toMatchSnapshot();
});
