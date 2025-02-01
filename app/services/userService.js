import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_FIREBASE_URL }),
  tagTypes: ["updateLocation", "updateProfileImage", "saveInitialUser"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ localId }) => `users/${localId}.json`,
      providesTags: ["updateLocation", "updateProfileImage", "saveInitialUser"],
    }),
    updateProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `users/${localId}.json`,
        method: "PATCH",
        body: { image },
      }),
      invalidatesTags: ["updateProfileImage"],
    }),
    updateAddress: builder.mutation({
      query: ({ localId, address, location }) => ({
        url: `users/${localId}.json`,
        method: "PATCH",
        body: { address, location },
      }),
      invalidatesTags: ["updateLocation"],
    }),
    saveUser: builder.mutation({
      query: ({ userId, fullname, email }) => ({
        url: `users/${userId}.json`,
        method: "PATCH",
        body: { fullname, email },
      }),
      invalidatesTags: ["saveInitialUser"],
    }),
  }),
});

export const {
  useUpdateProfileImageMutation,
  useGetUserQuery,
  useUpdateAddressMutation,
  useSaveUserMutation,
} = userApi;
