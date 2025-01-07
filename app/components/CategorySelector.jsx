import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Chip from "./Chip";

const CategorySelector = () => {
  const CATEGORIES = [
    { name: "All", slug: "all" },
    { name: "Top Pick", slug: "top-picked" },
    { name: "Indoor", slug: "indoor" },
    { name: "Outdoor", slug: "outdoor" },
    { name: "Seeds", slug: "seeds" },
    { name: "Planters", slug: "planters" },
  ];

  return (
    <>
      <FlatList
        contentContainerStyle={{ gap: 8, marginTop: 12 }}
        data={CATEGORIES}
        horizontal
        renderItem={({ item }) => <Chip>{item.name}</Chip>}
        keyExtractor={(item) => item.slug}
      />
    </>
  );
};

export default CategorySelector;

const styles = StyleSheet.create({});
