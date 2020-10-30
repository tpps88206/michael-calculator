import React, { useEffect, useState } from 'react';

import replace from 'lodash/replace';

import { makeStyles } from '@material-ui/styles';

import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKey from './CalculatorKey';
import styles from './styles';

const useStyles = makeStyles(styles);

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue,
};

const Calculator = () => {
  const classes = useStyles();

  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const clearAll = () => {
    setValue(null);
    setDisplayValue('0');
    setOperator(null);
    setWaitingForOperand(false);
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const clearLastChar = () => {
    setDisplayValue(displayValue => {
      return displayValue.substring(0, displayValue.length - 1) || '0';
    });
  };

  const toggleSign = () => {
    setDisplayValue(displayValue => {
      return String(parseFloat(displayValue) * -1);
    });
  };

  const inputPercent = () => {
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) {
      return;
    }

    // 取小數點以後的數字
    const fixedDigits = replace(displayValue, /^-?\d*\.?/, '');
    const newValue = parseFloat(displayValue) / 100;

    setDisplayValue(String(newValue.toFixed(fixedDigits.length + 2)));
  };

  const inputDot = () => {
    if (!/\./.test(displayValue)) {
      setDisplayValue(displayValue + '.');
      setWaitingForOperand(false);
    }
  };

  const inputDigit = digit => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue => {
        return displayValue === '0' ? String(digit) : displayValue + digit;
      });
    }
  };

  const performOperation = nextOperator => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);

      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
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

      if (displayValue !== '0') {
        clearDisplay();
      } else {
        clearAll();
      }
    }
  };

  return (
    <div className={classes.calculator}>
      <CalculatorDisplay value={displayValue} />
      <div className={classes.calculatorKeypad}>
        <div className={classes.inputKeys}>
          <div className={classes.functionKeys}>
            <CalculatorKey variant="function-key" onPress={() => (displayValue !== '0' ? clearDisplay() : clearAll())}>
              {displayValue !== '0' ? 'C' : 'AC'}
            </CalculatorKey>
            <CalculatorKey variant="function-key" onPress={() => toggleSign()}>
              ±
            </CalculatorKey>
            <CalculatorKey variant="function-key" onPress={() => inputPercent()}>
              %
            </CalculatorKey>
          </div>
          <div className={classes.digitKeys}>
            <CalculatorKey className={classes.key0} variant="digit-key" onPress={() => inputDigit(0)}>
              0
            </CalculatorKey>
            <CalculatorKey className={classes.keyDot} variant="digit-key" onPress={() => inputDot()}>
              ●
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(1)}>
              1
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(2)}>
              2
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(3)}>
              3
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(4)}>
              4
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(5)}>
              5
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(6)}>
              6
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(7)}>
              7
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(8)}>
              8
            </CalculatorKey>
            <CalculatorKey variant="digit-key" onPress={() => inputDigit(9)}>
              9
            </CalculatorKey>
          </div>
        </div>
        <div className={classes.operatorKeys}>
          <CalculatorKey variant="operator-key" onPress={() => performOperation('/')}>
            ÷
          </CalculatorKey>
          <CalculatorKey className={classes.keyMultiply} variant="operator-key" onPress={() => performOperation('*')}>
            ×
          </CalculatorKey>
          <CalculatorKey variant="operator-key" onPress={() => performOperation('-')}>
            −
          </CalculatorKey>
          <CalculatorKey variant="operator-key" onPress={() => performOperation('+')}>
            +
          </CalculatorKey>
          <CalculatorKey variant="operator-key" onPress={() => performOperation('=')}>
            =
          </CalculatorKey>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
