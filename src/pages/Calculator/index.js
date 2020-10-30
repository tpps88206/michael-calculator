import React from 'react';

import { makeStyles } from '@material-ui/styles';

import Calculator from '../../components/Calculator';
import styles from './styles';
const useStyles = makeStyles(styles);

const CalculatorPage = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Calculator</h1>
      <div className={classes.calculator}>
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
