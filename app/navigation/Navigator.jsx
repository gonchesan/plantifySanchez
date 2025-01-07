import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import ShoppingStack from "./ShoppingStack";
import TabBarIcon from "@/components/core/TabBarIcon";

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelPosition: "beside-icon",
        }}
      >
        <Tab.Screen
          name="ShopStack"
          component={ShoppingStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                text="Home"
                icon={focused ? "home" : "home-outline"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
  },
});
