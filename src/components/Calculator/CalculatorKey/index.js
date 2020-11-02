import React from 'react';
import PointTarget from 'react-point';

import classNames from 'classnames';

import { makeStyles } from '@material-ui/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const CalculatorKey = ({ onPress, variant, className, ...props }) => {
  const classes = useStyles();

  return (
    <PointTarget onPoint={onPress}>
      <button
        className={classNames(
          className,
          classes.calculatorKey,
          {
            [classes.operatorKey]: variant === 'operator-key',
            [classes.digitKey]: variant === 'digit-key',
            [classes.functionKey]: variant === 'function-key',
          },
          'd-block',
          'w-100',
          'h-100',
        )}
        {...props}
      />
    </PointTarget>
  );
};

export default CalculatorKey;
