import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { useGetOrdersByUserQuery } from "@/services/cartService";

import EmptyState from "@/components/EmptyState.jsx";
import Spinner from "@/components/core/Spinner.jsx";
import OrderCard from "@/components/OrderCard.jsx";

const Orders = () => {
  const localId = useSelector((state) => state.authReducer.user.localId);
  const { data: orders, isLoading } = useGetOrdersByUserQuery({ localId });

  if (isLoading) return <Spinner />;
  if (!orders)
    return (
      <EmptyState
        title="Your inbox of orders is empty"
        body="All incoming requests will be listed in this screen"
        icon="inbox"
      />
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} />}
        contentContainerStyle={{ gap: 16 }}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
});
