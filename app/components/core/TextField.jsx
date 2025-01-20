import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import Typography from "@/components/core/Typography";
import { Ionicons } from "@expo/vector-icons";

const TextField = ({
  label,
  onChange,
  error = "",
  secureTextEntry = false,
  name,
  placeholder,
}) => {
  const [input, setInput] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const onChangeText = (text) => {
    setInput(text);
    onChange(text, name);
  };

  return (
    <View style={styles.container}>
      <Typography variant="caption" style={styles.label}>
        {label}
      </Typography>
      <TextInput
        value={input}
        secureTextEntry={secureTextEntry && hidePassword}
        onChangeText={(text) => onChangeText(text)}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#c9c9c9"}
      />

      {secureTextEntry ? (
        <Pressable
          style={{
            padding: 12,
            position: "absolute",
            right: 8,
            top: 6,
          }}
          onPress={() => setHidePassword((prev) => !prev)}
        >
          {hidePassword ? (
            <Ionicons name="eye-outline" size={18} />
          ) : (
            <Ionicons name="eye-off-outline" size={18} />
          )}
        </Pressable>
      ) : null}

      {error ? (
        <Typography variant="caption" style={styles.helperText}>
          {error}
        </Typography>
      ) : null}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "center",
    position: "relative",
  },
  label: {
    position: "absolute",
    top: -10,
    left: 12,
    backgroundColor: "#f4f4f4",
    zIndex: 5,
    paddingHorizontal: 8,
    color: "#c9c9c9",
  },
  input: {
    // backgroundColor: "#fafafa",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#c9c9c9",
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 14,
  },
  helperText: {
    color: "#f44336",
  },
});
