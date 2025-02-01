import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { useUpdateProfileImageMutation } from "@/services/userService";
import { setProfilePicture } from "@/features/auth/authSlice";

import Button from "@/components/core/Button";

const ImageSelector = () => {
  const [image, setImage] = useState(null);
  const localId = useSelector((state) => state.authReducer.user.localId);
  const [triggerSaveProfile] = useUpdateProfileImageMutation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const pickImage = async (method) => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();

    if (!granted) return;

    const config = {
      aspect: [1, 1],
      quality: 0.2,
      base64: true,
      allowsEditing: true,
    };

    const result =
      method == "camera"
        ? await ImagePicker.launchCameraAsync(config)
        : await ImagePicker.launchImageLibraryAsync(config);

    if (result.canceled) return;

    setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
  };

  const confirmImage = async () => {
    try {
      await triggerSaveProfile({ localId, image }).unwrap();
      dispatch(setProfilePicture({ image }));
      navigation.goBack();
    } catch (error) {
      console.log("🚀 ~ confirmImage ~ error:", error);
    }
  };

  return (
    <View style={{ alignItems: "center", gap: 16 }}>
      <Text>ImageSelector</Text>
      {image ? (
        <>
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, borderRadius: 99 }}
          />

          <Button onPress={confirmImage}>Confirm photo</Button>
        </>
      ) : (
        <>
          <Button onPress={() => pickImage("camera")}>Take a photo</Button>
          <Button onPress={pickImage}>Upload from gallery</Button>
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({});
