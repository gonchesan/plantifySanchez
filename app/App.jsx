import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";

import Navigator from "@/navigation/Navigator";

import COLORS from "@/constants/Colors";
import FONTS from "@/constants/Fonts";

const App = () => {
  const [fontsLoaded] = useFonts(FONTS);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Navigator />
      <StatusBar style="light" backgroundColor={COLORS.green[200]} />
    </>
  );
};

export default App;
