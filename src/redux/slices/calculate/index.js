import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

const slice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    getResult: (state, action) => {},
  },
});

export const { getResult } = slice.actions;

export default slice.reducer;
