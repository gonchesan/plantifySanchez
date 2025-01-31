import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import COLORS from "@/constants/Colors.js";

const Spinner = () => {
  return (
    <Modal
      transparent={true}
      animationType={"none"}
      visible={true}
      style={{ zIndex: 1100 }}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.loader}>
          <ActivityIndicator
            animating={true}
            color={COLORS["green"][400]}
            size={80}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
