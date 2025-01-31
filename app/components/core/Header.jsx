import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { clearUser } from "@/features/auth/authSlice";

import Typography from "@/components/core/Typography";
import BackButton from "@/components/core/BackButton";
import { Ionicons } from "@expo/vector-icons";
import { deleteSesion } from "@/config/dbSqlite";

const Header = ({ title = "Title Default" }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    deleteSesion();
  };

  return (
    <View style={styles.container}>
      {navigation.canGoBack() ? <BackButton /> : null}
      <Typography variant="h6">{title}</Typography>
      <Pressable onPress={handleLogout} style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={22} />
      </Pressable>
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
    top: 4,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 99,
    backgroundColor: "#fff",
    shadowColor: "#000",
    borderColor: "#c1c1c170",
    borderWidth: 1,
  },
});
