import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { getTotalPrice, getTotalQuantity } from "@/helpers/cart";

import { usePostOrderMutation } from "@/services/cartService";
import { emptyCart } from "@/features/cart/cartSlice";

import ItemProductCart from "@/components/ItemProductCart";
import Button from "@/components/core/Button";
import EmptyState from "@/components/EmptyState";

import Spinner from "@/components/core/Spinner.jsx";
import Toast from "@/components/core/Toast.jsx";

const Cart = () => {
  const PRODUCTS_IN_CART = useSelector((state) => state.cartReducer.items);
  const updatedDate = useSelector((state) => state.cartReducer.updatedDate);
  const userLogged = useSelector((state) => state.authReducer.user);
  const localId = useSelector((state) => state.authReducer.user.localId);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [triggerPost, { isLoading: isUpdating, isSuccess }] =
    usePostOrderMutation();

  const goToCategories = () => {
    navigation.navigate("ShopStack", { screen: "categories" });
  };

  const handleSubmit = async () => {
    if (PRODUCTS_IN_CART.length) {
      const totalPrice = getTotalPrice(PRODUCTS_IN_CART);
      const totalQuantity = getTotalQuantity(PRODUCTS_IN_CART);

      try {
        // TODO add userLogged, dateOfOrder, Address
        const order = {
          totalQuantity,
          totalPrice,
          products: PRODUCTS_IN_CART,
          updatedDate,
          userLogged,
        };

        const response = await triggerPost({ order, localId }).unwrap();
        console.log("🚀 ~ handleSubmit ~ response:", response);
        //TODO snackbar or toast component
        // console.log(response.data?.name);
        dispatch(emptyCart());
        // navigation.navigate("OrdersStack", { screen: "orders" });
      } catch (error) {
        console.error("Error submitting order: ", err);
      }
    }
  };

  if (isUpdating) return <Spinner />;

  return (
    <View style={styles.container}>
      {/* <Text>{isUpdating ? "CARGANDO..." : "NARANJA"}</Text>
      <Text>{isSuccess ? "ISSUCCESS" : "FALLO AL HACERSE"}</Text> */}
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
      ) : (
        <EmptyState
          title="Your cart is empty"
          body="Check out what's trending"
          onConfirm={goToCategories}
          icon="cart"
        />
      )}
      {isSuccess && (
        <Toast
          status="success"
          title="Success!"
          content="Your order was sent."
        />
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
    flex: 1,
  },
  listWrapper: { gap: 16 },
});
