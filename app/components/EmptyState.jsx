import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Typography from "@/components/core/Typography.jsx";
import Button from "./core/Button";

import NoItemsCartAsset from "@/assets/images/empty-cart.svg";
import NoSearchResultAsset from "@/assets/images/empty-search.svg";
import EmptyInboxAsset from "@/assets/images/empty-inbox.svg";

const MAPPING_ASSET = {
  cart: () => <NoItemsCartAsset style={styles.image} />,
  inbox: () => <EmptyInboxAsset style={styles.image} />,
  search: () => <NoSearchResultAsset style={styles.image} />,
};

const EmptyState = ({
  title = "Your inbox is empty",
  body = "All incoming requests will be listed in this folder",
  icon = "inbox",
  onConfirm,
}) => {
  const Image = MAPPING_ASSET[icon];

  return (
    <View style={styles.container}>
      <Image />
      <Typography
        variant="h6"
        style={{ color: "#4a4a4a", textAlign: "center" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        style={{ color: "#4a4a4a", textAlign: "center" }}
      >
        {body}
      </Typography>
      {onConfirm ? (
        <Button style={styles.buttonConfirm} rounded="full" onPress={onConfirm}>
          Discover products
        </Button>
      ) : null}
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: "center",
    gap: 4,
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 24,
  },
  buttonConfirm: { marginTop: 16, width: "100%", textAlign: "center" },
});
