import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBarIcon from "@/components/core/TabBarIcon";

import ShoppingStack from "@/navigation/ShoppingStack";
import CartStack from "@/navigation/CartStack";
import OrdersStack from "@/navigation/OrdersStack";
import ProfileStack from "@/navigation/ProfileStack";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "@/services/userService";
import { setProfilePicture } from "@/features/auth/authSlice";

const DashboardStack = () => {
  const Tab = createBottomTabNavigator();

  const { localId, image } = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const { data: user, isLoading } = useGetUserQuery({ localId });

  useEffect(() => {
    if (user && user?.image) dispatch(setProfilePicture({ image: user.image }));
  }, [user]);

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
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon text="Cart" icon={focused ? "cart" : "cart-outline"} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              text="Orders"
              icon={focused ? "receipt" : "receipt-outline"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              text="Profile"
              icon={focused ? "person" : "person-outline"}
            />
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
