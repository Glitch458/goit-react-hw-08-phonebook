import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ContactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://630e1c10b37c364eb7131b72.mockapi.io',
  }),
  endpoints: builder => ({
    getContact: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = ContactApi;
