import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typography from "@/components/core/Typography.jsx";
import COLORS from "@/constants/Colors";

const Chip = ({ children }) => {
  return (
    <View
      style={{
        borderRadius: 99,
        paddingHorizontal: 14,
        paddingVertical: 6,
        backgroundColor: COLORS["green"][300],
      }}
    >
      <Typography variant="body2">{children}</Typography>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({});
