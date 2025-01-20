import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_FIREBASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) =>
        category
          ? `products.json?orderBy="category"&equalTo="${category}"`
          : `products.json`,
    }),
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = shopApi;
