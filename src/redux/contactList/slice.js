import { createSlice } from '@reduxjs/toolkit';

export const LOC_ST = 'contactList';
const initialContactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState: () =>
    JSON.parse(localStorage.getItem(LOC_ST)) || initialContactList,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(contacts => contacts.id !== action.payload);
    },
  },
});
export const { add, remove } = contactListSlice.actions;
