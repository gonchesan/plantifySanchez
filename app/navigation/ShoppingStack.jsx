import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "@/components/core/Header";

import Home from "@/screens/Home";
import Categories from "@/screens/Categories";
import ProductDetail from "@/screens/ProductDetail";
import ProductsByCategory from "@/screens/ProductsByCategory";

const ShoppingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return route.name !== "home" ? (
            <Header
              title={
                route.name
                // route.name === "Home"
                //   ? "Categories"
                //   : route.name === "ProductsByCategory"
                //   ? route.params.category
                //   : route.params?.product.brand
              }
            />
          ) : null;
        },
      })}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="product-detail" component={ProductDetail} />
      <Stack.Screen
        name="products-by-category"
        component={ProductsByCategory}
      />
    </Stack.Navigator>
  );
};

export default ShoppingStack;
