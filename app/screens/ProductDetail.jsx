import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import COLORS from "@/constants/Colors";
import Typography from "@/components/core/Typography";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/core/Button";
import Counter from "@/components/Counter";

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "gray",
          width: "100%",
          flex: 1,
        }}
      />
      {/* <Image source={{uri:product.thumbnail}} style={styles.image} resizeMode='contain'/> */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" style={styles.title} numberOfLines={1}>
            {product.title}
          </Typography>
          <Pressable
            style={{
              width: 42,
              height: 42,
              borderRadius: 99,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="heart-outline" size={28} />
          </Pressable>
        </View>
        <Typography variant="body2" style={styles.description}>
          {product.description}
        </Typography>
        <View style={{ flexDirection: "row", gap: 16, marginVertical: 16 }}>
          <Typography variant="h6">Quantity</Typography>
          <Counter />
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#c3c3c3",
            flexDirection: "row",
            paddingTop: 16,
          }}
        >
          <View style={{ width: 104, gap: 4 }}>
            <Typography variant="caption" style={{}}>
              Total price
            </Typography>
            <Typography variant="h5" style={styles.price}>
              ${product.price}
            </Typography>
          </View>
          <Button style={{ flex: 1, width: "100%" }} icon="cart" rounded="full">
            Agregar al carrito
          </Button>
          {/* <Pressable style={styles.button}>
            <Text style={styles.textButton}>Agregar al carrito</Text>
          </Pressable> */}
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 24,
    paddingTop: 24,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
  },
  title: {
    fontWeight: "bold",
    textTransform: "capitalize",
    paddingVertical: 20,
  },
  description: {
    textTransform: "capitalize",
  },
  price: {
    // fontSize: 20,
    fontWeight: "bold",
    // paddingHorizontal: 50,
    // paddingVertical: 20,
    // textAlign: "right",
  },
  button: {
    backgroundColor: COLORS.green["600"],
    marginHorizontal: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
    flex: 1,
  },
  textButton: {
    fontSize: 20,
    color: COLORS.green["200"],
  },
});
