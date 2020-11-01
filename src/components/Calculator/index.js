import React, { useEffect, useState } from 'react';

import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/styles';

import DivisionSvg from '../../assets/division.svg';
import EqualSvg from '../../assets/equal.svg';
import PercentSvg from '../../assets/percent.svg';
import ToggleSvg from '../../assets/toggle.svg';
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

  const [value, setValue] = useState(null); // 記錄目前計算結果的數值
  const [displayValue, setDisplayValue] = useState('0'); // 記錄顯示區域需要顯示的數字
  const [operator, setOperator] = useState(null); // 記錄當前四則運算方法
  const [waitingForOperand, setWaitingForOperand] = useState(false); // 記錄是否需要將畫面的數字消除

  // TODO: 有時候按鍵會失效
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 清空所有狀態
  const clearAll = () => {
    setValue(null);
    setDisplayValue('0');
    setOperator(null);
    setWaitingForOperand(false);
  };

  // 將顯示區域重新顯示 0
  const clearDisplay = () => {
    setDisplayValue('0');
  };

  // 按下鍵盤倒退鍵時，刪除最後一個數字
  const clearLastChar = () => {
    setDisplayValue(displayValue => {
      return displayValue.substring(0, displayValue.length - 1) || '0';
    });
  };

  // 正負轉換
  const toggleSign = () => {
    setDisplayValue(displayValue => {
      return String(parseFloat(displayValue) * -1);
    });
  };

  // 按下百分比
  const inputPercent = () => {
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) {
      return;
    }

    const newValue = currentValue / 100;
    setDisplayValue(String(newValue));
  };

  // 按下小數點
  const inputDot = () => {
    // 先判斷目前是否有小數點了
    if (!/\./.test(displayValue)) {
      setDisplayValue(displayValue + '.');
      // TODO: 如果 waitingForOperand 為 true 的情況下按下小數點按鍵應該顯示 0.
      setWaitingForOperand(false);
    }
  };

  // 按下數字
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

  // 按下四則運算
  const performOperation = nextOperator => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      // 如果先前已經按過其他四則運算，則先處理
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);

      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true); // 按下四則運算後，再輸入數字的話要清空顯示區域
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
              <Icon>
                <img src={ToggleSvg} alt="equal" width="24" height="24" />
              </Icon>
            </CalculatorKey>
            <CalculatorKey variant="function-key" onPress={() => inputPercent()}>
              <Icon>
                <img src={PercentSvg} alt="equal" width="16" height="16" />
              </Icon>
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
            <Icon>
              <img src={DivisionSvg} alt="division" width="16" height="16" />
            </Icon>
          </CalculatorKey>
          <CalculatorKey className={classes.keyMultiply} variant="operator-key" onPress={() => performOperation('*')}>
            <ClearIcon />
          </CalculatorKey>
          <CalculatorKey variant="operator-key" onPress={() => performOperation('-')}>
            <RemoveIcon />
          </CalculatorKey>
          <CalculatorKey variant="operator-key" onPress={() => performOperation('+')}>
            <AddIcon />
          </CalculatorKey>
          <CalculatorKey variant="operator-key" onPress={() => performOperation('=')}>
            <Icon>
              <img src={EqualSvg} alt="equal" width="16" height="16" />
            </Icon>
          </CalculatorKey>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
