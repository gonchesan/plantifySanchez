import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "@/constants/Colors.js";

const IconButton = ({
  style,
  size = "DEFAULT",
  icon = "add",
  onPress,
  disabled,
  loading,
}) => {
  const getPadding = (size) => {
    const paddingMapping = {
      small: 8,
      DEFAULT: 12,
      large: 16,
    };

    return { padding: paddingMapping[size] };
  };

  const getSize = (size) => {
    const sizeMapping = {
      small: 18,
      DEFAULT: 20,
      large: 26,
    };

    return sizeMapping[size];
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, getPadding(size), style]}
      disabled={disabled || loading}
    >
      <Ionicons name={icon} size={getSize(size)} style={styles.icon} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    display: "inline-flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    textAlign: "center",
    fontSize: "1.5rem",
    outline: 0,
    borderWidth: 1,
    borderStyle: "initial",
    borderColor: COLORS["black"][100],
    margin: 0,
    textDecoration: "none",
    flex: "0 0 auto",
    borderRadius: 999,
  },
  icon: {
    color: COLORS["green"][500],
  },
});
