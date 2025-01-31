import { StyleSheet, Text } from "react-native";
import React from "react";

import COLORS from "@/constants/Colors";

const Typography = ({
  variant = "body1",
  gutterBottom = false,
  style,
  children,
  numberOfLines = 0,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles[variant], gutterBottom && styles.gutterBottom, style]}
    >
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  h1: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    display: "block",
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontSize: 96,
    // letterSpacing: "-0.01562em",
  },
  h2: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 300,
    fontSize: 60,
    // letterSpacing: "-0.00833em",
  },
  h3: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 48,
    // letterSpacing: "0em",
  },
  h4: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 34,
    // letterSpacing: "0.00735em",
  },
  h5: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 24,
    // letterSpacing: "0em",
  },
  h6: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontSize: 20,
    // letterSpacing: "0.0075em",
  },
  subtitle1: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 16,
    // letterSpacing: "0.00938em",
  },
  subtitle2: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontSize: 14,
    // letterSpacing: "0.00714em",
  },
  body1: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 16,
    // letterSpacing: "0.00938em",
  },
  body2: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 14,
    // letterSpacing: "0.01071em",
  },
  button: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    fontSize: 14,
    // letterSpacing: "0.02857em",
    display: "block",
  },
  caption: {
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 12,
    // letterSpacing: "0.03333em",
    display: "block",
  },
  overline: {
    color: COLORS["black"][300],
    tintColor: COLORS["black"][300],
    marginHorizontal: 0,
    marginVertical: 0,
    fontFamily: "Inter, Helvetica, Arial, sans-serif",
    fontWeight: 400,
    fontSize: 12,
    // letterSpacing: "0.08333em",
    textTransform: "uppercase",
    display: "block",
  },
  gutterBottom: {
    marginBottom: "0.35em",
  },
});
