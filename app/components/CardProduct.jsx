import { Pressable, StyleSheet, View } from "react-native";
import React from "react";

import Typography from "@/components/core/Typography";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardProduct = ({ product }) => {
  const { title, price, rating } = product;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          navigation.navigate("ProductDetail", {
            product,
          })
        }
      >
        {/* //Imagen */}
        <View style={styles.image} />
        <View style={styles.footer}>
          <Typography
            numberOfLines={1}
            variant="subtitle2"
            style={styles.title}
          >
            {title}
          </Typography>
          <View style={styles.priceWrapper}>
            <Ionicons name="star" size={16} color={"#FCAF23"} />
            <Typography variant="body2" style={styles.rating}>
              {rating}
            </Typography>
          </View>
        </View>
        <Typography variant="subtitle1">${price}</Typography>
      </Pressable>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    width: "100%",
    height: 140,
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    maxWidth: "70%",
  },
  priceWrapper: { flexDirection: "row", alignItems: "center" },
  rating: { color: "#B1B1B1" },
});
