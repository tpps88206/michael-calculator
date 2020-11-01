import React from 'react';

import { makeStyles } from '@material-ui/styles';

import Calculator from '../../components/Calculator';
import styles from './styles';
const useStyles = makeStyles(styles);

import Draggable from 'react-draggable';

import Button from '@material-ui/core/Button';
import GradientIcon from '@material-ui/icons/Gradient';
const CalculatorPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Button className="mt-2 ml-2" variant="contained" color="primary" size="large" startIcon={<GradientIcon />}>
        打開計算機
      </Button>
      <Draggable>
        <div className={classes.calculator}>
          <Calculator />
        </div>
      </Draggable>
    </div>
  );
};

export default CalculatorPage;
