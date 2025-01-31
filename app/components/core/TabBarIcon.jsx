import { StyleSheet, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import COLORS from "@/constants/Colors";

import Typography from "@/components/core/Typography";

const TabBarIcon = ({ text, icon }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={28} color={COLORS.green[500]} />
      <Typography variant="caption" style={styles.text}>
        {text}
      </Typography>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    width: 60,
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: COLORS.green[500],
  },
});
