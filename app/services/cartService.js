import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_FIREBASE_URL,
  }),
  tagTypes: ["postOrder"],
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: ({ order, localId }) => ({
        url: `orders/${localId}.json`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["postOrder"],
    }),
    getOrdersByUser: builder.query({
      query: ({ localId }) => `orders/${localId}.json`,
      transformResponse: (response) => {
        if (!response) {
          return null;
        }
        const data = Object.entries(response).map((item) => ({
          ...item[1],
          id: item[0],
        }));
        return data;
      },
      providesTags: ["postOrder"],
    }),
    // getOrderDetail: builder.query({
    //   query: ({ orderId }) => `orders/${orderId}.json`,
    // }),
  }),
});

export const {
  usePostOrderMutation,
  useGetOrdersByUserQuery,
  // useGetOrderDetailQuery,
} = cartApi;
