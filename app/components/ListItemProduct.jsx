import { FlatList, StyleSheet } from "react-native";
import React from "react";
import CardProduct from "./CardProduct";

import PRODUCTS from "@/data/products.json";

const ListItemProduct = () => {
  return (
    <FlatList
      numColumns={2}
      data={PRODUCTS}
      renderItem={({ item }) => <CardProduct product={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

export default ListItemProduct;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingTop: 24,
  },
  columnWrapper: {
    gap: 16,
  },
});
