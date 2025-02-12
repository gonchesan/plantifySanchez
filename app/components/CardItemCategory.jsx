import { Pressable, StyleSheet, View } from "react-native";
import React from "react";

import { useDispatch } from "react-redux";

import COLORS from "@/constants/Colors";
import Typography from "@/components/core/Typography";
import { filterProducts } from "@/features/shop/shopSlice";
import { useNavigation } from "@react-navigation/native";

const CardItemCategory = ({ item: category }) => {
  const { name, slug } = category;

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("products-by-category", { category: slug })
      }
      // onPress={() => dispatch(filterProducts(category))}
    >
      <View>
        <Typography>{name}</Typography>
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
    flex: 1 / 2,
  },
});
