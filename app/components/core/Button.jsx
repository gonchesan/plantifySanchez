import React, { memo, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Typography from "@/components/core/Typography.jsx";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "@/constants/Colors";

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

    const getVariantStyles = (variant, pressed, isHovered) => {
      switch (variant) {
        case "outlined":
          return {
            backgroundColor: "transparent",
            borderColor: COLORS["green"][500],
            borderWidth: 2,
            ...(pressed && { backgroundColor: COLORS["green"][100] }),
            ...(isHovered && { backgroundColor: COLORS["green"][50] }),
          };
        case "ghost":
          return {
            backgroundColor: "transparent",
            ...(pressed && { backgroundColor: COLORS["green"][200] }),
            ...(isHovered && { backgroundColor: COLORS["green"][100] }),
          };
        case "contained":
        default:
          return {
            backgroundColor: pressed
              ? COLORS["green"][300]
              : COLORS["green"][500],
            ...(isHovered && { backgroundColor: COLORS["green"][400] }),
          };
      }
    };

    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.base,
          getVariantStyles(variant, pressed, isHovered),
          getBorderRadius(rounded),
          style,
        ]}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon ? (
          <Ionicons
            name={icon}
            size={22}
            style={[
              styles.icon,
              variant === "contained" && styles.containedIcon,
            ]}
          />
        ) : null}
        <Typography
          variant="button"
          style={[
            styles.text,
            variant === "contained" ? styles.containedText : styles.defaultText,
          ]}
        >
          {children}
        </Typography>
      </Pressable>
    );
  }
);

export default Button;

const styles = StyleSheet.create({
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingHorizontal: 16,
    paddingVertical: 12,
    minWidth: 64,
    borderRadius: 4,
    cursor: "pointer",
    userSelect: "none",
    transition:
      "background-color 250ms ease, border-color 250ms ease, color 250ms ease",
  },
  text: {
    fontWeight: "500",
  },
  defaultText: {
    color: COLORS["green"][500],
  },
  containedText: {
    color: COLORS["white"],
  },
  containedIcon: {
    color: COLORS["white"],
  },
  icon: {
    marginRight: 8,
  },
});
