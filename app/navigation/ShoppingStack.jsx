import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "@/components/core/Header";

import Home from "@/screens/Home";
import Categories from "@/screens/Categories";
import ProductDetail from "@/screens/ProductDetail";

const ShoppingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return route.name !== "Home" ? (
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShoppingStack;
