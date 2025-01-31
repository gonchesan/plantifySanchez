import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "@/screens/Orders.jsx";
import OrderDetail from "@/screens/OrderDetail.jsx";

import Header from "@/components/core/Header.jsx";

const OrdersStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => <Header title={route.name} />,
      })}
    >
      <Stack.Screen name="orders" component={Orders} />
      <Stack.Screen name="order-detail" component={OrderDetail} />
    </Stack.Navigator>
  );
};

export default OrdersStack;

const styles = StyleSheet.create({});
