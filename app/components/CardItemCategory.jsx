import { Pressable, StyleSheet, View } from "react-native";
import React from "react";

import { useDispatch } from "react-redux";

import COLORS from "@/constants/Colors";
import Typography from "@/components/core/Typography";
import { filterProducts } from "@/features/shop/shopSlice";

const CardItemCategory = ({ item: category }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.container}
      onPress={() => dispatch(filterProducts(category))}
    >
      <View>
        <Typography>{category}</Typography>
      </View>
    </Pressable>
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
