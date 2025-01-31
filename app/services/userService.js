import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_FIREBASE_URL }),
  tagTypes: ["updateLocation", "updateProfileImage"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: ({ localId }) => `users/${localId}.json`,
      providesTags: ["updateLocation", "updateProfileImage"],
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
  }),
});

export const {
  useUpdateProfileImageMutation,
  useGetUserQuery,
  useUpdateAddressMutation,
} = userApi;
