import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "@/components/core/Header";

import Home from "@/screens/Home";
import ProductDetail from "@/screens/ProductDetail";
import ProductsByCategory from "@/screens/ProductsByCategory";
import Products from "@/screens/Products";

const ShoppingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return route.name !== "home" ? <Header title={route.name} /> : null;
        },
      })}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="product-detail" component={ProductDetail} />
      <Stack.Screen
        name="products-by-category"
        component={ProductsByCategory}
      />
    </Stack.Navigator>
  );
};

export default ShoppingStack;
