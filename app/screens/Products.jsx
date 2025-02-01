import { StyleSheet, View } from "react-native";
import React from "react";

import { useGetProductsQuery } from "@/services/shopService";

import Spinner from "@/components/core/Spinner.jsx";
import ListItemProduct from "@/components/ListItemProduct";

const Products = () => {
  const { data: PRODUCTS, isLoading } = useGetProductsQuery();

  if (isLoading) return <Spinner />;

  return (
    <View style={styles.container}>
      <ListItemProduct products={PRODUCTS} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
