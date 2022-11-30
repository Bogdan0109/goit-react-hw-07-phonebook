import { configureStore } from '@reduxjs/toolkit';
import { contactsApi, contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    // contacts: contactsSlice.reducer,
    filters: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

// [contactsApi.reducerPath]: contactsApi.reducer,
// .concat(contactsApi.middleware)
