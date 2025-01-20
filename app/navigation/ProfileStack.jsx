import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "@/components/core/Header";

import Profile from "@/screens/Profile";
import ImageSelector from "@/screens/ImageSelector";
import LocationSelector from "@/screens/LocationSelector";

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: () => <Header title="My profile" />,
      })}
    >
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="image-selector" component={ImageSelector} />
      <Stack.Screen name="location-selector" component={LocationSelector} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
