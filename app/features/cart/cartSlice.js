import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    user: "userLogged",
    updatedDate: Date.now().toString(),
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { product, quantity = 1 } = action.payload;
      const isInCart = state.items.some((item) => item.id === product.id);

      if (isInCart) {
        const updatedItems = state.items.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });

        return {
          ...state,
          items: updatedItems,
          updatedDate: Date.now().toString(),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...product, quantity }],
      };
    },
    removeItem: (state, action) => {
      const { product, discardItem = false } = action.payload;

      const shouldRemoveCompletely = discardItem || product.quantity <= 1;

      if (shouldRemoveCompletely) {
        const itemsFiltered = state.items.filter(
          (item) => item.id !== product.id
        );
        return {
          ...state,
          items: itemsFiltered,
          updatedDate: Date.now().toString(),
        };
      }

      const updatedItems = state.items.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );

      return {
        ...state,
        items: updatedItems,
        updatedDate: Date.now().toString(),
        // totalQuantity: getTotalQuantity(updatedItems),
        // totalPrice: getTotalPrice(updatedItems),
      };
    },
    emptyCart: (state) => ({
      ...state,
      items: [],
      updatedDate: Date.now().toString(),
    }),
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
