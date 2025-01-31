import { Animated, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import COLORS from "@/constants/Colors.js";

import { Ionicons } from "@expo/vector-icons";
import Typography from "@/components/core/Typography.jsx";

const STATUS_CONFIG = {
  success: {
    icon: "checkmark-circle",
    backgroundColor: COLORS["success"][100],
    iconBackground: COLORS["success"][200],
    iconColor: COLORS["success"][300],
  },
  error: {
    icon: "alert-circle",
    backgroundColor: COLORS["error"][100],
    iconBackground: COLORS["error"][200],
    iconColor: COLORS["error"][300],
  },
};

const Toast = ({
  title = "Status",
  content = "Descriptive message.",
  status = "success",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);
  const fadeAnim = new Animated.Value(1);

  const { icon, backgroundColor, iconBackground, iconColor } =
    STATUS_CONFIG[status] || STATUS_CONFIG.success;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
        if (onClose) onClose();
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[styles.container, { backgroundColor, opacity: fadeAnim }]}
    >
      <View style={[styles.iconWrapper, { backgroundColor: iconBackground }]}>
        <Ionicons
          name={icon}
          style={[styles.icon, { color: iconColor }]}
          size={20}
        />
      </View>

      <View style={styles.bodyWrapper}>
        <Typography variant="subtitle1" style={{ color: "#404040" }}>
          {title}
        </Typography>
        <Typography variant="body2" style={{ color: "#606060" }}>
          {content}
        </Typography>
      </View>
    </Animated.View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    position: "absolute",
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
    backgroundColor: COLORS["success"][100],
    zIndex: 5,
    bottom: 10,
    right: "5%",
    gap: 16,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS["success"][200],
    borderRadius: 5,
    padding: 5,
  },
  icon: {
    color: COLORS["success"][300],
  },
  bodyWrapper: {
    padding: "5px 20px 5px 10px",
  },
});
