import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_FIREBASE_URL }),
  endpoints: (builder) => ({
    updateProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `users/${localId}.json`,
        method: "PATCH",
        body: { image },
      }),
    }),
    getUser: builder.query({
      query: ({ localId }) => `users/${localId}.json`,
    }),
  }),
});

export const { useUpdateProfileImageMutation, useGetUserQuery } = userApi;
