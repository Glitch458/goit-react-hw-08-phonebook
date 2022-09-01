import { configureStore } from '@reduxjs/toolkit';
import { contactListSlice } from './contactList/slice';
import { filterSlice } from './filter/slice';
import { ContactApi } from './ContactApi';

export const store = configureStore({
  reducer: {
    contactList: contactListSlice.reducer,
    filterValue: filterSlice.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    ContactApi.middleware,
  ],
});
