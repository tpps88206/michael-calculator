import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/styles';

import DivisionSvg from '../../assets/division.svg';
import EqualSvg from '../../assets/equal.svg';
import PercentSvg from '../../assets/percent.svg';
import ToggleSvg from '../../assets/toggle.svg';
import { clearAll, setValue } from '../../redux/slices/calculate';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKey from './CalculatorKey';
import styles from './styles';

const useStyles = makeStyles(styles);

// 定義四則運算方法
const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue,
};

const Calculator = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const value = useSelector(state => state.calculate.value);
  const displayValue = useSelector(state => state.calculate.displayValue);
  const operator = useSelector(state => state.calculate.operator);
  const waitingForOperand = useSelector(state => state.calculate.waitingForOperand);

  // TODO: 有時候按鍵會失效
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const reset = () => {
    if (displayValue !== '0') {
      // 將顯示區域重新顯示 0
      dispatch(setValue({ displayValue: '0' }));
    } else {
      dispatch(clearAll());
    }
  };

  // 按下鍵盤倒退鍵時，刪除最後一個數字
  const clearLastChar = () => {
    dispatch(setValue({ displayValue: displayValue.substring(0, displayValue.length - 1) || '0' }));
  };

  // 正負轉換
  const toggleSign = () => {
    dispatch(setValue({ displayValue: parseFloat(displayValue) * -1 }));
  };

  // 按下百分比
  const inputPercent = () => {
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) {
      return;
    }

    dispatch(setValue({ displayValue: currentValue / 100 }));
  };

  // 按下小數點
  const inputDot = () => {
    // 先判斷目前是否有小數點了
    if (!/\./.test(displayValue)) {
      // TODO: 如果 waitingForOperand 為 true 的情況下按下小數點按鍵應該顯示 0.
      dispatch(setValue({ displayValue: displayValue + '.', waitingForOperand: false }));
    }
  };

  // 按下數字
  const inputDigit = digit => {
    if (waitingForOperand) {
      dispatch(setValue({ displayValue: String(digit), waitingForOperand: false }));
    } else {
      dispatch(setValue({ displayValue: displayValue === '0' ? String(digit) : displayValue + digit }));
    }
  };

  // 按下四則運算
  const performOperation = nextOperator => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      dispatch(setValue({ value: inputValue, displayValue, operator: nextOperator, waitingForOperand: true }));
    } else if (operator) {
      // 如果先前已經按過其他四則運算，則先處理
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);

      dispatch(
        setValue({ value: newValue, displayValue: String(newValue), operator: nextOperator, waitingForOperand: true }),
      );
    }
  };

  const handleKeyDown = event => {
    let { key } = event;

    if (key === 'Enter') {
      key = '=';
    }

    if (/\d/.test(key)) {
      event.preventDefault();
      inputDigit(parseInt(key, 10));
    } else if (key in CalculatorOperations) {
      event.preventDefault();
      performOperation(key);
    } else if (key === '.') {
      event.preventDefault();
      inputDot();
    } else if (key === '%') {
      event.preventDefault();
      inputPercent();
    } else if (key === 'Backspace') {
      event.preventDefault();
      clearLastChar();
    } else if (key === 'Clear') {
      event.preventDefault();
    }

    reset();
  };

  return (
    <div className={classNames(classes.calculator, 'pa-1 h-100 w-100')}>
      <CalculatorDisplay value={displayValue} />
      <div className={classes.calculatorKeypad}>
        <Grid container spacing={2} className="h-100">
          <Grid item xs={9}>
            <div className="h-100">
              <div className={classes.functionKeys}>
                <Grid container spacing={2} className="h-100">
                  <Grid item xs={4}>
                    <CalculatorKey variant="function-key" onPress={() => reset()}>
                      {displayValue !== '0' ? 'C' : 'AC'}
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="function-key" onPress={() => toggleSign()}>
                      <Icon>
                        <img src={ToggleSvg} alt="equal" width="36" height="36" />
                      </Icon>
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="function-key" onPress={() => inputPercent()}>
                      <Icon>
                        <img src={PercentSvg} alt="equal" width="32" height="32" />
                      </Icon>
                    </CalculatorKey>
                  </Grid>
                </Grid>
              </div>
              <div className={classNames(classes.digitKeys, 'mt-1')}>
                <Grid container spacing={2} className="h-100">
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(7)}>
                      7
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(8)}>
                      8
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(9)}>
                      9
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(4)}>
                      4
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(5)}>
                      5
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(6)}>
                      6
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(1)}>
                      1
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(2)}>
                      2
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey variant="digit-key" onPress={() => inputDigit(3)}>
                      3
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={8}>
                    <CalculatorKey className={classes.key0} variant="digit-key" onPress={() => inputDigit(0)}>
                      0
                    </CalculatorKey>
                  </Grid>
                  <Grid item xs={4}>
                    <CalculatorKey className={classes.keyDot} variant="digit-key" onPress={() => inputDot()}>
                      ●
                    </CalculatorKey>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="h-100">
              <Grid container spacing={2} className="h-100">
                <Grid item xs={12}>
                  <CalculatorKey variant="operator-key" onPress={() => performOperation('/')}>
                    <Icon>
                      <img src={DivisionSvg} alt="division" width="30" height="30" />
                    </Icon>
                  </CalculatorKey>
                </Grid>
                <Grid item xs={12}>
                  <CalculatorKey variant="operator-key" onPress={() => performOperation('*')}>
                    <ClearIcon style={{ fontSize: '1em' }} />
                  </CalculatorKey>
                </Grid>
                <Grid item xs={12}>
                  <CalculatorKey variant="operator-key" onPress={() => performOperation('-')}>
                    <RemoveIcon style={{ fontSize: '1em' }} />
                  </CalculatorKey>
                </Grid>
                <Grid item xs={12}>
                  <CalculatorKey variant="operator-key" onPress={() => performOperation('+')}>
                    <AddIcon style={{ fontSize: '1em' }} />
                  </CalculatorKey>
                </Grid>
                <Grid item xs={12}>
                  <CalculatorKey variant="operator-key" onPress={() => performOperation('=')}>
                    <Icon>
                      <img src={EqualSvg} alt="equal" width="26" height="26" />
                    </Icon>
                  </CalculatorKey>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Calculator;
