import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { deleteSesion } from "@/config/dbSqlite";
import { useGetUserQuery } from "@/services/userService";
import { clearUser } from "@/features/auth/authSlice";

import COLORS from "@/constants/Colors.js";

import Button from "@/components/core/Button.jsx";
import Spinner from "@/components/core/Spinner.jsx";
import IconButton from "@/components/core/IconButton.jsx";
import Description from "@/components/Description.jsx";

const Profile = () => {
  const navigation = useNavigation();
  const localId = useSelector((state) => state.authReducer.user.localId);
  const { data: user, isLoading } = useGetUserQuery({ localId });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    deleteSesion();
  };

  if (isLoading) return <Spinner />;

  return (
    <View style={styles.container}>
      <View style={{ position: "relative", marginBottom: 16 }}>
        <Image
          source={
            user?.image
              ? { uri: user.image }
              : require("@/assets/images/deafult-avatar.png")
          }
          resizeMode="cover"
          style={{
            width: 150,
            height: 150,
            borderRadius: 99,
            backgroundColor: "gray",
          }}
        />

        <IconButton
          icon="pencil"
          onPress={() => navigation.navigate("image-selector")}
          style={styles.iconButton}
        />
      </View>

      {user ? (
        <>
          <Description
            label="Fullname"
            text={user?.fullname ? user?.fullname : "John Doe"}
          />
          <Description
            label="Address"
            text={
              user?.address
                ? user?.address
                : "You don't have an address loaded yet."
            }
            onPress={() => navigation.navigate("location-selector")}
          />
        </>
      ) : null}
      <Button style={{ width: "100%" }} onPress={handleLogout}>
        Sign out
      </Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  iconButton: {
    position: "absolute",
    bottom: -16,
    right: 8,
    backgroundColor: COLORS["white"],
    borderColor: COLORS["green"][400],
  },
});
