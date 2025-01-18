import { createSlice } from "@reduxjs/toolkit";
import PRODUCTS from "@/data/products.json";
import CATEGORIES from "@/data/categories.json";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: PRODUCTS,
    categories: CATEGORIES,
    productsByCategory: [],
  },
  reducers: {
    filterProducts: (state, action) => {
      const productsFiltered = state.products.filter(
        (item) => item.category === action.payload
      );
      return {
        ...state,
        productsByCategory: productsFiltered,
      };
    },
  },
});

export const { filterProducts } = shopSlice.actions;
export default shopSlice.reducer;
