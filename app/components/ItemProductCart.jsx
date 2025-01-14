import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Typography from "./core/Typography";
import COLORS from "@/constants/Colors";
import Counter from "@/components/Counter";

const ItemProductCart = ({ product }) => {
  const { title, price } = product;
  return (
    <View style={styles.container}>
      {/* //Imagen */}
      <View style={styles.image} />
      <View style={styles.bodyCard}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle1" style={{ color: COLORS.green[600] }}>
          ${price}
        </Typography>
        <View style={styles.actionCard}>
          <Counter />
          <Pressable style={styles.removeButton}>
            <Ionicons
              name="trash-outline"
              size={24}
              style={{ color: "#1b1b1b" }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ItemProductCart;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  image: {
    backgroundColor: "gray",
    borderRadius: 4,
    height: "100%",
    width: 112,
  },
  bodyCard: { flex: 1, gap: 10 },
  actionCard: { flexDirection: "row", justifyContent: "space-between" },
  removeButton: {
    borderRadius: 99,
    padding: 8,
    borderStyle: "solid",
    borderColor: "#1b1b1b",
    borderWidth: 1,
    width: 42,
    height: 42,
  },
});
