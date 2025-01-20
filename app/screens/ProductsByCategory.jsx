import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "@/services/shopService";
import ListItemProduct from "@/components/ListItemProduct";

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

  if (isLoading)
    return (
      <View>
        <Text>LOADING...</Text>
      </View>
    );

  if (isError)
    return (
      <View>
        <Text>{error.message}...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <ListItemProduct products={productsFormatted} />
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
