import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/slice';
import { ContactApi } from './ContactApi';
import { authApi } from './auth/authAPI';
import { AuthSlice } from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    filterValue: filterSlice.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ContactApi.middleware,
    authApi.middleware,
  ],
});
