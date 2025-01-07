import React from "react";
import { Text, View } from "react-native";

export default function ItemCard({ item }) {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>{item.name}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({

// })
