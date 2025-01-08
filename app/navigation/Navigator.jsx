import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "@/navigation/AuthStack";
import DashboardStack from "@/navigation/DashboardStack";

const Navigator = () => {
  //TODO isAuth to show Auth or Dashboard Stack
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <DashboardStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;
