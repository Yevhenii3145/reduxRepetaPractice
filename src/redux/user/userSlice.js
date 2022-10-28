import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  // примитив
  //   initialState: 150,
  //   обьект
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
