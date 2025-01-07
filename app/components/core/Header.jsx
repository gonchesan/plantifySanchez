import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Typography from "@/components/core/Typography";
import BackButton from "@/components/core/BackButton";

const Header = ({ title = "Title Default" }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {navigation.canGoBack() ? <BackButton /> : null}
      <Typography variant="h6">{title}</Typography>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: {
    fontSize: 22,
  },
});
