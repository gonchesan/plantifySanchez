import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import ItemProductCart from "@/components/ItemProductCart";

const Cart = () => {
  const DUMMY_PROD = [
    { id: "asdd", title: "iPhone 9", price: 549 },
    { id: "zzz", title: "iPhone 9", price: 549 },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_PROD}
        renderItem={({ item }) => <ItemProductCart product={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listWrapper}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, paddingTop: 24 },
  listWrapper: { gap: 16 },
});
