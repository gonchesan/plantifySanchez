import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "@/helpers/cart";

import { usePostOrderMutation } from "@/services/cartService";
import { emptyCart } from "@/features/cart/cartSlice";

import ItemProductCart from "@/components/ItemProductCart";
import Button from "@/components/core/Button";

const Cart = () => {
  const PRODUCTS_IN_CART = useSelector((state) => state.cartReducer.items);
  const updatedDate = useSelector((state) => state.cartReducer.updatedDate);
  const userLogged = useSelector((state) => state.cartReducer.user);

  const dispatch = useDispatch();

  const [triggerPost, { isLoading: isUpdating, isSuccess }] =
    usePostOrderMutation();

  const handleSubmit = async () => {
    if (PRODUCTS_IN_CART.length) {
      const totalPrice = getTotalPrice(PRODUCTS_IN_CART);
      const totalQuantity = getTotalQuantity(PRODUCTS_IN_CART);

      try {
        const response = await triggerPost({
          totalQuantity,
          totalPrice,
          products: PRODUCTS_IN_CART,
          updatedDate,
          userLogged,
        }).unwrap();
        console.log("🚀 ~ handleSubmit ~ response:", response);
        //TODO snackbar or toast component
        // console.log(response.data?.name);
        dispatch(emptyCart());
      } catch (error) {
        console.error("Error submitting order: ", err);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>{isUpdating ? "CARGANDO..." : "NARANJA"}</Text>
      <Text>{isSuccess ? "ISSUCCESS" : "FALLO AL HACERSE"}</Text> */}
      {/* //TODO create Checkout Screen  */}
      {/* //TODO create emptyState Component */}
      {PRODUCTS_IN_CART.length ? (
        <>
          <FlatList
            data={PRODUCTS_IN_CART}
            renderItem={({ item }) => <ItemProductCart product={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listWrapper}
          />
          <Button onPress={handleSubmit} disabled={isUpdating}>
            Continue to payment
          </Button>
        </>
      ) : null}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24, paddingTop: 24 },
  listWrapper: { gap: 16 },
});
