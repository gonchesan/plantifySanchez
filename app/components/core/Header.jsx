import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Typography from "@/components/core/Typography.jsx";
import BackButton from "@/components/core/BackButton.jsx";
import DropdownUser from "@/components/DropdownUser.jsx";

const Header = ({ title = "Title Default", showDropdown = true }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {navigation.canGoBack() ? <BackButton /> : null}
      <Typography variant="h6">{title}</Typography>

      {showDropdown ? (
        <View style={styles.logoutButton}>
          <DropdownUser />
        </View>
      ) : null}
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
  logoutButton: {
    position: "absolute",
    right: 10,
    top: 6,
  },
});
