import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null, // 記錄目前計算結果的數值
  displayValue: '0', // 記錄顯示區域需要顯示的數字
  operator: null, // 記錄當前四則運算方法
  waitingForOperand: false, // 記錄是否需要將畫面的數字消除
};

const slice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    // 清空所有狀態
    clearAll: (state, action) => {
      return initialState;
    },
    // 設定值
    setValue: (state, action) => {
      const { value, displayValue, operator, waitingForOperand } = action.payload;
      return { ...state, value, displayValue, operator, waitingForOperand };
    },
  },
});

export const { clearAll, setValue } = slice.actions;

export default slice.reducer;
