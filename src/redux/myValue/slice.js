import { createSlice } from '@reduxjs/toolkit';

export const myValueSlice = createSlice({
  name: 'myValuegg',
  // примитив
  initialState: 150,
  //   обьект
  // initialState: { value: 100}
  reducers: {
    increment(state, action) {
      //   state.value += action.payload
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});
console.log(myValueSlice);
export const { increment, decrement } = myValueSlice.actions;
