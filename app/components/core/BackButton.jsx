import { Pressable, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={styles.buttonContainer}
    >
      <Ionicons name="arrow-back-outline" size={22} color={"#1b1b1b"} />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    left: 15,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 99,
    backgroundColor: "#fff",
    shadowColor: "#000",
    borderColor: "#c1c1c170",
    borderWidth: 1,
  },
});
