import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],

  endpoints: builder => ({
    register: builder.mutation({
      query: newUser => ({
        url: '/signup',
        method: 'POST',
        body: newUser,
        validateStatus: (response, result) =>
          response.status === 400 ? alert(response.statusText) : result,
      }),
      invalidatesTags: ['Auth'],
    }),

    login: builder.mutation({
      query: payload => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Auth'],
    }),

    logout: builder.mutation({
      query: payload => ({
        url: '/logout',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  authApi;
