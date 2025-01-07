import { FlatList, StyleSheet } from "react-native";
import React from "react";
import CATEGORIES from "@/data/categories.json";
import CardItemCategory from "@/components/CardItemCategory";

const ItemListCategories = () => {
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
