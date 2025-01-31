import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import AuthStack from "@/navigation/AuthStack";
import DashboardStack from "@/navigation/DashboardStack";

import { fetchSession, initDb } from "@/config/dbSqlite";
import { clearUser, setUser } from "@/features/auth/authSlice";

const Navigator = () => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.user.idToken
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await initDb();
        dispatch(clearUser());
        const sessionUser = await fetchSession();
        console.log(sessionUser);
        if (sessionUser) {
          dispatch(setUser(sessionUser));
        }
      } catch (error) {
        console.log("Error initializing the database:", error);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DashboardStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigator;
