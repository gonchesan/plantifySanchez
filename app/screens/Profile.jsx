import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { useGetUserQuery } from "@/services/userService";
import { setProfilePicture } from "@/features/auth/authSlice";

import Button from "@/components/core/Button";
import Spinner from "@/components/core/Spinner.jsx";

const Profile = () => {
  const navigation = useNavigation();
  // const image = useSelector((state) => state.authReducer.user.image);
  const localId = useSelector((state) => state.authReducer.user.localId);
  const { data: user, isLoading } = useGetUserQuery({ localId });

  if (isLoading) return <Spinner />;

  return (
    <View style={{ marginTop: 70, alignItems: "center", gap: 20 }}>
      <Text>Profile screen</Text>
      {/* //TODO add defaultProfileImg */}
      <Image
        source={
          user?.image
            ? { uri: user.image }
            : {
                uri: "https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM=",
              }
        }
        resizeMode="cover"
        style={{
          width: 150,
          height: 150,
          borderRadius: 99,
          backgroundColor: "gray",
        }}
      />
      {user?.address ? (
        <Text>Direccion: {user?.address}</Text>
      ) : (
        <Text>Aun no tienes una direccion cargada</Text>
      )}
      <Button onPress={() => navigation.navigate("image-selector")}>
        Add profile photo
      </Button>
      <Button onPress={() => navigation.navigate("location-selector")}>
        Add location
      </Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
