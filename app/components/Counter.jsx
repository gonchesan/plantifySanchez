import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "@/constants/Colors";

import Typography from "@/components/core/Typography";

const Counter = () => {
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
      <Pressable style={styles.button} onPress={() => editCounter(false)}>
        <Ionicons name="remove" style={styles.textColor} />
      </Pressable>
      <Typography style={styles.textColor}>{count}</Typography>
      <Pressable style={styles.button} onPress={() => editCounter(true)}>
        <Ionicons name="add" style={styles.textColor} />
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green[100],
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 99,
    paddingHorizontal: 8,
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.green[600],
  },
  textColor: {
    color: COLORS.green[600],
  },
});