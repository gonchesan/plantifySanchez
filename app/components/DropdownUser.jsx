import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { deleteSesion } from "@/config/dbSqlite";
import { clearUser } from "@/features/auth/authSlice";

import { Ionicons } from "@expo/vector-icons";

import Button from "@/components/core/Button.jsx";

const DropdownUser = ({ style }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { image: userImage } = useSelector((state) => state.authReducer.user);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenOptions = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const navigateToProfile = () => {
    navigation.navigate("ProfileStack", { screen: "profile" });
  };

  const handleLogout = () => {
    dispatch(clearUser());
    deleteSesion();
  };

  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={handleOpenOptions} style={styles.iconWrapper}>
        <Image
          source={
            userImage
              ? { uri: userImage }
              : require("@/assets/images/deafult-avatar.png")
          }
          resizeMode="cover"
          style={styles.userImage}
        />
        {!open ? (
          <Ionicons name="chevron-down" size={16} style={styles.icon} />
        ) : null}
      </Pressable>
      {open ? (
        <View style={styles.popper}>
          <Button icon="person-circle-outline" onPress={navigateToProfile}>
            Edit profile
          </Button>
          <Button icon="lock-open-outline" onPress={handleLogout}>
            Sign out
          </Button>
        </View>
      ) : null}
    </View>
  );
};

export default DropdownUser;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  iconWrapper: { borderRadius: 99, borderWidth: 5, borderColor: "#e0e0e0" },
  userImage: {
    backgroundColor: "gray",
    width: 48,
    height: 48,
    borderRadius: 99,
  },
  icon: {
    position: "absolute",
    bottom: -12,
    zIndex: 5,
    right: -2,
    color: "#424242",
    backgroundColor: "#f4f4f4",
    borderRadius: 99,
    padding: 2,
  },
  popper: {
    position: "absolute",
    top: 72,
    right: 0,
    flex: 1,
    zIndex: 10,
    width: 200,
    padding: 12,
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    gap: 8,
    elevation: 5,
  },
});
