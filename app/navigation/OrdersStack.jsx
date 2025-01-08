import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "@/screens/Orders";

const OrdersStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersStack;

const styles = StyleSheet.create({});
