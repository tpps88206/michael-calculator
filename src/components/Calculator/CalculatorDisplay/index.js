import React from 'react';

import { makeStyles } from '@material-ui/styles';

import AutoScalingText from '../AutoScalingText';
import styles from './styles';

const useStyles = makeStyles(styles);

const CalculatorDisplay = ({ value, ...props }) => {
  const classes = useStyles();

  return (
    <div {...props} className={classes.calculatorDisplay}>
      <AutoScalingText>{value}</AutoScalingText>
    </div>
  );
};

export default CalculatorDisplay;
