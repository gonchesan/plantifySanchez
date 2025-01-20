import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { AUTH_ERRORS_MAP } from "@/constants/Errors";
import { loginSchema } from "@/validations/loginSchema";

import { setUser } from "@/features/auth/authSlice";

import TextField from "@/components/core/TextField";
import Button from "@/components/core/Button";
import { useLoginMutation } from "@/services/authService";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [triggerLogIn, { isLoading, isError, error, isSuccess }] =
    useLoginMutation();

  const [form, setForm] = useState({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  const handleChangeForm = (text, name) => {
    setForm((prev) => ({
      ...prev,
      [name]: {
        value: text,
        error: "",
      },
    }));
  };

  const setError = (path, errorMessage) => {
    setForm((prev) => ({
      ...prev,
      [path]: { ...path, error: errorMessage },
    }));
  };

  const handleLoginSubmit = async () => {
    try {
      const email = form.email.value;
      const password = form.password.value;

      await loginSchema.validate({
        email: email,
        password: password,
      });
      const response = await triggerLogIn({ email, password }).unwrap();
      //TODO Show success
      if (response.idToken) {
        const user = {
          email: response.email,
          idToken: response.idToken,
          localId: response.localId,
        };
        dispatch(setUser(user));
      }
    } catch (error) {
      if (Object.hasOwn(error, "data")) {
        const errorMessage =
          AUTH_ERRORS_MAP[error.data.error.message] || "Error from firebase";
        console.log(errorMessage);
      }
      if (Object.hasOwn(error, "errors")) {
        //Errors from yup validation
        //TODO show errrors
        setError(error.path, error.message);
        return;
      }
      console.log("🚀 ~ handleLoginSubmit ~ error:", error);
    }
  };
  return (
    <View style={{ paddingHorizontal: 24, paddingTop: 24, gap: 16 }}>
      <Text style={{ marginBottom: 16 }}>Login View</Text>
      <TextField
        label="Email"
        name="email"
        error={form.email.error}
        onChange={(text) => handleChangeForm(text, "email")}
      />
      <TextField
        label="Password"
        name="password"
        error={form.password.error}
        onChange={(text) => handleChangeForm(text, "password")}
        secureTextEntry
      />
      <Button onPress={handleLoginSubmit}>Login</Button>

      <Button onPress={() => navigation.navigate("signup")}>Sign Up</Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
