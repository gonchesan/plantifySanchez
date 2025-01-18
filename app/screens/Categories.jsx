import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import CardItemCategory from "@/components/CardItemCategory";

const ItemListCategories = () => {
  const CATEGORIES = useSelector((state) => state.shopReducer.categories);

  return (
    <>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CardItemCategory item={item} />}
        contentContainerStyle={styles.containerCard}
        columnWrapperStyle={{ gap: 16 }}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  containerCard: {
    paddingBottom: 60,
    gap: 16,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
