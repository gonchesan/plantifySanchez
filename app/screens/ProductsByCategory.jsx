import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "@/services/shopService";

import ListItemProduct from "@/components/ListItemProduct.jsx";
import Spinner from "@/components/core/Spinner.jsx";
import EmptyState from "@/components/EmptyState.jsx";
import Toast from "@/components/core/Toast.jsx";

const ProductsByCategory = ({ route }) => {
  const { category } = route.params;

  const { data, isLoading, isSuccess, isError, error } =
    useGetProductsQuery(category);

  const [productsFormatted, setProductsFormatted] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setProductsFormatted(Object.values(data));
    }
  }, [isSuccess]);

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <Toast
        status="error"
        title="Ups! Something was wrong"
        content={error.message}
      />
    );

  return (
    <View style={styles.container}>
      {productsFormatted.length ? (
        <ListItemProduct products={productsFormatted} />
      ) : (
        <EmptyState
          title="No results found"
          body="Try adjusting your search to find what you are looking for"
          icon="search"
        />
      )}
    </View>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 24,
    paddingHorizontal: 24,
  },
});
