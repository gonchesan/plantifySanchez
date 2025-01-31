import { FlatList, StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { useGetCategoriesQuery } from "@/services/shopService";

import CardItemCategory from "@/components/CardItemCategory.jsx";
import Spinner from "@/components/core/Spinner.jsx";

const ItemListCategories = () => {
  // const CATEGORIES = useSelector((state) => state.shopReducer.categories);
  const { data: CATEGORIES, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <Spinner />;

  return (
    <>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => <CardItemCategory item={item} />}
        contentContainerStyle={styles.containerCard}
        columnWrapperStyle={{
          gap: 16,
          flex: 1,
          justifyContent: "flex-start",
        }}
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
