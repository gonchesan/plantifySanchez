import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import COLORS from "@/constants/Colors";

import Typography from "@/components/core/Typography";
import { decrement, increment } from "@/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

  // const editCounter = (isAdded) => {
  //   if (isAdded) {
  //     setCount((prevValues) => prevValues + 1);
  //   } else {
  //     if (count > 0) setCount((prevValues) => prevValues - 1);
  //   }
  // };
  return (
    <View style={styles.container}>
      {/* <Pressable style={styles.button} onPress={() => editCounter(false)}> */}
      <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
        <Ionicons name="remove" style={styles.textColor} />
      </Pressable>
      <Typography style={styles.textColor}>{count}</Typography>
      {/* <Pressable style={styles.button} onPress={() => editCounter(true)}> */}
      <Pressable style={styles.button} onPress={() => dispatch(increment())}>
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
