import { createSlice } from '@reduxjs/toolkit';
import defaultContacts from '../data/contacts.json';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [...defaultContacts],
  },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6387c97ad9b24b1be3f99bb0.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery } = contactsApi;

export const { addContacts, deleteContacts } = contactsSlice.actions;
