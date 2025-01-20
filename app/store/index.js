import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import counterReducer from "@/features/counter/counterSlice";
import shopReducer from "@/features/shop/shopSlice";
import cartReducer from "@/features/cart/cartSlice";
import authReducer from "@/features/auth/authSlice";

import { shopApi } from "@/services/shopService";
import { cartApi } from "@/services/cartService";
import { authApi } from "@/services/authService";
import { userApi } from "@/services/userService";

const store = configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    authReducer,
    // API's
    [shopApi.reducerPath]: shopApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopApi.middleware,
      cartApi.middleware,
      authApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);
export default store;
