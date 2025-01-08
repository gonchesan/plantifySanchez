import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShoppingStack from "@/navigation/ShoppingStack";
import TabBarIcon from "@/components/core/TabBarIcon";

const DashboardStack = () => {
  const Tab = createBottomTabNavigator();

  return (
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
            <TabBarIcon text="Home" icon={focused ? "home" : "home-outline"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardStack;

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
  },
});
