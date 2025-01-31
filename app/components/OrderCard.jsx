import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import COLORS from "@/constants/Colors.js";

import Typography from "@/components/core/Typography.jsx";

const OrderCard = ({ order }) => {
  const [orderDate, setOrderDate] = useState();
  const { id, totalPrice, totalQuantity, updatedDate } = order;

  function formatUnixTimestamp(unixTimestamp) {
    const date = new Date(Number(unixTimestamp));

    return date
      .toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(",", " |");
  }

  useEffect(() => {
    const dateFormatted = formatUnixTimestamp(updatedDate);
    setOrderDate(dateFormatted);
  }, [id]);

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#c9c9c9",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <Typography variant="subtitle1" style={{}}>
        Order ID: {id}
      </Typography>
      <Typography variant="caption" style={{ color: COLORS["black"][100] }}>
        {orderDate}
      </Typography>
      <View style={{ flexDirection: "row", paddingTop: 12 }}>
        <View style={{ flex: 1 }}>
          <Typography variant="caption" style={{ color: COLORS["black"][100] }}>
            Products
          </Typography>
          <Typography variant="body2" style={{}}>
            {totalQuantity} {totalQuantity > 1 ? "products" : "product"}
          </Typography>
        </View>
        <View style={{ flex: 1 }}>
          <Typography variant="caption" style={{ color: COLORS["black"][100] }}>
            Order price
          </Typography>
          <Typography variant="body2" style={{}}>
            $ {totalPrice}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({});
