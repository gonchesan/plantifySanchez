import { Image, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "@/features/cart/cartSlice";

import COLORS from "@/constants/Colors";

import { Ionicons } from "@expo/vector-icons";
import Typography from "@/components/core/Typography";
import Button from "@/components/core/Button";
import Counter from "@/components/Counter";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const editCounter = (isAdded) => {
    if (isAdded) {
      setCount((prevValues) => prevValues + 1);
    } else {
      if (count > 0) setCount((prevValues) => prevValues - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
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
          <Counter
            quantity={count}
            incrementFunc={() => editCounter(true)}
            decrementFunc={() => editCounter(false)}
          />
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
          <Button
            style={{ flex: 1, width: "100%" }}
            icon="cart"
            rounded="full"
            onPress={() => dispatch(addItem({ product, quantity: count }))}
          >
            Agregar al carrito
          </Button>
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
    backgroundColor: COLORS["green"][100],
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
    fontWeight: "bold",
  },
  button: {
    backgroundColor: COLORS.green["500"],
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
