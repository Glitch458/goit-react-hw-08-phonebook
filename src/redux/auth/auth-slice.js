import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authAPI';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    });
  },
});
