import React from 'react';

import { fireEvent, queryByAttribute, render, screen } from '../../utils/test-utils';
import Calculator from './index';

const getById = queryByAttribute.bind(null, 'id');

it('renders Calculator without crashing', () => {
  const div = document.createElement('div');
  render(<Calculator />, div);
});

it('renders Calculator with snapshot', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});

it('click single button 7', () => {
  const dom = render(<Calculator />);
  const button = screen.getByText('7');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('7');
});

it('click 5 add 6 equals 11', () => {
  const dom = render(<Calculator />);
  const button5 = screen.getByText('5');
  const button6 = screen.getByText('6');
  const buttonAdd = getById(dom.container, 'Add');
  const buttonEquals = getById(dom.container, 'Equals');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button5,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonAdd,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    button6,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonEquals,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('11');
});

it('click 5 sub 6 equals -1', () => {
  const dom = render(<Calculator />);
  const button5 = screen.getByText('5');
  const button6 = screen.getByText('6');
  const buttonSub = getById(dom.container, 'Sub');
  const buttonEquals = getById(dom.container, 'Equals');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button5,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonSub,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    button6,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonEquals,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('-1');
});

it('click 5 multiply 6 equals 30', () => {
  const dom = render(<Calculator />);
  const button5 = screen.getByText('5');
  const button6 = screen.getByText('6');
  const buttonMultiply = getById(dom.container, 'Multiply');
  const buttonEquals = getById(dom.container, 'Equals');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button5,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonMultiply,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    button6,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonEquals,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('30');
});

it('click 5 divided by 10 equals 0.5', () => {
  const dom = render(<Calculator />);
  const button5 = screen.getByText('5');
  const button1 = screen.getByText('1');
  const button0 = getById(dom.container, 'Key0');
  const buttonDividedBy = getById(dom.container, 'DividedBy');
  const buttonEquals = getById(dom.container, 'Equals');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button5,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonDividedBy,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    button1,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    button0,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonEquals,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('0.5');
});

it('click 5 dot 6 equals 5.6', () => {
  const dom = render(<Calculator />);
  const button5 = screen.getByText('5');
  const button6 = screen.getByText('6');
  const buttonDot = getById(dom.container, 'Dot');
  const buttonEquals = getById(dom.container, 'Equals');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button5,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonDot,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    button6,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonEquals,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('5.6');
});

it('click 5 and percent equals 0.05', () => {
  const dom = render(<Calculator />);
  const button5 = screen.getByText('5');
  const buttonPercent = getById(dom.container, 'Percent');
  const buttonEquals = getById(dom.container, 'Equals');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button5,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonPercent,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonEquals,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('0.05');
});

it('click 5 and toggleSign equals -5', () => {
  const dom = render(<Calculator />);
  const button5 = screen.getByText('5');
  const buttonToggleSign = getById(dom.container, 'ToggleSign');
  const buttonEquals = getById(dom.container, 'Equals');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button5,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonToggleSign,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonEquals,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('-5');
});

it('click 5 and reset equals 0', () => {
  const dom = render(<Calculator />);
  const button5 = screen.getByText('5');
  const buttonReset = getById(dom.container, 'Reset');
  const buttonEquals = getById(dom.container, 'Equals');
  const element = getById(dom.container, 'AutoScalingText');

  fireEvent(
    button5,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonReset,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
  fireEvent(
    buttonEquals,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );

  expect(element.textContent).toBe('0');
});
