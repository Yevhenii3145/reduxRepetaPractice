import { configureStore } from '@reduxjs/toolkit';
import { myValueSlice } from './myValue/slice';
import { itemsSlice } from './itemsSlice/slice';
import { userSlice } from './user/userSlice';

// import { createAction, createReducer } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// ggggg
// export const increment = createAction('myValue/increment');
// console.log(increment.toString());
// console.log(increment());
// ggggg
// export const decrement = createAction('myValue/decrement');

// IMMER - дает иммутабельность
// const myReducer = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// });

// export const add = createAction('items/add');
// export const remove = createAction('items/remove');

// const itemsReducer = createAction([], {
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state,action) => state.filter( item => item.id !== action.payload),
// })

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemsSlice.reducer,
    user: userSlice.reducer,
  },
});
