import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "@/constants/Colors.js";

import Typography from "@/components/core/Typography";

const Description = ({ onPress, text, label }) => {
  return (
    <View style={styles.container}>
      <Typography variant="caption" style={styles.label}>
        {label}
      </Typography>
      <View style={styles.input}>
        <Typography numberOfLines={1}>{text}</Typography>

        {onPress ? (
          <Pressable onPress={onPress} style={styles.iconWrapper}>
            <Ionicons
              name="pencil"
              size={24}
              style={{ color: COLORS["green"][500] }}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  label: {
    position: "absolute",
    top: -10,
    left: 12,
    backgroundColor: "#f4f4f4",
    zIndex: 5,
    paddingHorizontal: 8,
    color: "#9da39d",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#9da39d",
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 14,
  },
  iconWrapper: {
    backgroundColor: COLORS["white"],
    padding: 12,
    borderRadius: 999,
    position: "absolute",
    right: 0,
    top: 4,
  },
});
