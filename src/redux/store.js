import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from './filter/slice';
import { ContactApi } from './ContactApi';
import { authApi } from './auth/authAPI';
import { AuthSlice } from './auth/auth-slice';

const persistConfig = {
  key: 'user',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, AuthSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    filterValue: filterSlice.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ContactApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
