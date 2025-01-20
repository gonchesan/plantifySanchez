import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "@/navigation/AuthStack";
import DashboardStack from "@/navigation/DashboardStack";
import { useSelector } from "react-redux";

const Navigator = () => {
  //TODO isAuth to show Auth or Dashboard Stack

  const isAuthenticated = useSelector(
    (state) => state.authReducer.user.idToken
  );
  // const isAuthenticated = true;
  return (
    <NavigationContainer>
      {isAuthenticated ? <DashboardStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;
