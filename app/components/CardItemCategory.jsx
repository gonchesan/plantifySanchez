import { StyleSheet, View } from "react-native";
import React from "react";

import COLORS from "@/constants/Colors";
import Typography from "@/components/core/Typography";

const CardItemCategory = ({ item: category }) => {
  return (
    <View style={styles.container}>
      <Typography>{category}</Typography>
    </View>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green[200],
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    flex: 1,
  },
});
