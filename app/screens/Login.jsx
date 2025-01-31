import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { AUTH_ERRORS_MAP } from "@/constants/Errors";
import { loginSchema } from "@/validations/loginSchema";

import { deleteSesion, insertSession } from "@/config/dbSqlite";
import { setUser } from "@/features/auth/authSlice";
import { useLoginMutation } from "@/services/authService";
import PlatifyLogo from "@/assets/images/plantify-logo.svg";

import COLORS from "@/constants/Colors.js";

import TextField from "@/components/core/TextField";
import Button from "@/components/core/Button";
import Typography from "@/components/core/Typography";
import Spinner from "@/components/core/Spinner.jsx";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [triggerLogIn, { isLoading: isUpdating, isError, error, isSuccess }] =
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

  const setErrorInAllFields = (errorMessage) => {
    setForm((prev) => ({
      ...prev,
      email: { ...prev.email, error: errorMessage },
      password: { ...prev.password, error: errorMessage },
    }));
  };

  const handleLoginSubmit = async () => {
    // Clear form
    setForm((prev) => ({
      ...prev,
      email: { ...prev.email, error: "" },
      password: { ...prev.password, error: "" },
    }));

    try {
      const email = form.email.value;
      const password = form.password.value;

      await loginSchema.validate({
        email: email,
        password: password,
      });
      const response = await triggerLogIn({ email, password }).unwrap();
      if (response.idToken) {
        const user = {
          email: response.email,
          idToken: response.idToken,
          localId: response.localId,
        };
        dispatch(setUser(user));

        await deleteSesion();
        await insertSession(user.localId, user.email, user.idToken);
      }
    } catch (error) {
      if (Object.hasOwn(error, "data")) {
        const errorMessage =
          AUTH_ERRORS_MAP[error.data.error.message] || "Error from firebase";

        setErrorInAllFields(errorMessage);
      }
      if (Object.hasOwn(error, "errors")) {
        //Errors from yup validation
        setError(error.path, error.message);
        return;
      }
    }
  };

  return (
    <View style={styles.container}>
      {isUpdating && <Spinner />}

      <View style={styles.imagesWrapper}>
        <PlatifyLogo />
      </View>
      <Typography variant="h5" style={styles.title}>
        Welcome Back
      </Typography>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Typography variant="h5" style={styles.title}>
          to
        </Typography>
        <Typography variant="h5" style={[styles.title, styles.titleGreen]}>
          PLANTIFY
        </Typography>
      </View>
      <Typography style={styles.description}>
        Hello there, login to continue
      </Typography>
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
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">Didn't have an account?</Typography>
        <Button variant="ghost" onPress={() => navigation.navigate("signup")}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    gap: 16,
    flex: 1,
  },
  imagesWrapper: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
  titleGreen: {
    color: COLORS["green"][500],
  },
  description: {
    color: COLORS["black"][100],
  },
});
