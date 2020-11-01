import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null, // 記錄目前計算結果的數值
  displayValue: '0', // 記錄顯示區域需要顯示的數字
  operator: null, // 記錄當前四則運算方法
};

const slice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    // 清空所有狀態
    clearAll: (state, action) => {
      return initialState;
    },
    // 設定顯示區域要顯示的值
    setDisplayValue: (state, action) => {
      state.displayValue = action.payload.val;
    },
    // 在按下 Operation 針對當前的值來設定
    setValueFromOperation: (state, action) => {
      state.value = action.payload.value;
      state.displayValue = action.payload.displayValue;
      state.operator = action.payload.operator;
    },
  },
});

export const { clearAll, setDisplayValue, setValueFromOperation } = slice.actions;

export default slice.reducer;
