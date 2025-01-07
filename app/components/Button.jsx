import React, { memo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Typography from "@/components/Typography.jsx";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";

const Button = memo(
  ({
    style,
    children,
    variant = "contained",
    onPress,
    icon,
    rounded = "DEFAULT",
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const getBorderRadius = (rounded) => {
      const borderMapping = {
        none: 0,
        sm: 2,
        DEFAULT: 4,
        lg: 8,
        full: 99,
      };

      return { borderRadius: borderMapping[rounded] };
    };

    return (
      <View>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? Colors["green"][600]
                : Colors["green"][500],
            },
            isHovered && styles.containedHover,
            getBorderRadius(rounded),
            styles.contained,
            style,
          ]}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {icon ? (
            <Ionicons name={icon} size={22} style={styles.symbol} />
          ) : null}
          <Typography variant="button" style={styles.containedText}>
            {children}
          </Typography>
        </Pressable>
      </View>
    );
  }
);

export default Button;

const styles = StyleSheet.create({
  symbol: {
    // color: "inherit",
    // tintColor: "inherit",
    color: Colors["white"],
    tintColor: Colors["white"],
  },
  contained: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    fontWeight: 500,
    minWidth: 64,
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
    margin: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 0,
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  containedText: {
    color: Colors["white"],
    tintColor: Colors["white"],
  },
  containedHover: {
    backgroundColor: Colors["green"][600],
    color: Colors["green"][600],
  },
});
