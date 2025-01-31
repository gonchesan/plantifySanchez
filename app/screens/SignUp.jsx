import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigation } from "@react-navigation/native";
import { AUTH_ERRORS_MAP } from "@/constants/Errors";
import { signUpSchema } from "@/validations/signUpSchema";

import PlatifyLogo from "@/assets/images/plantify-logo.svg";
import { deleteSesion, insertSession } from "@/config/dbSqlite";
import { useSignUpMutation } from "@/services/authService";
import { setUser } from "@/features/auth/authSlice";
import COLORS from "@/constants/Colors.js";

import Button from "@/components/core/Button";
import TextField from "@/components/core/TextField";
import Spinner from "@/components/core/Spinner.jsx";
import Typography from "@/components/core/Typography";

const SignUp = () => {
  const navigation = useNavigation();
  const [triggerSignUp, { isLoading: isUpdating, isError, isSuccess }] =
    useSignUpMutation();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    confirmPassword: {
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
      confirmPassword: { ...prev.confirmPassword, error: errorMessage },
    }));
  };

  const handleSignUpSubmit = async () => {
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    try {
      await signUpSchema.validate({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      const response = await triggerSignUp({ email, password }).unwrap();
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
      // Errors from Google
      if (Object.hasOwn(error, "data")) {
        const errorMessage = AUTH_ERRORS_MAP[error.data.error.message];
        setErrorInAllFields(errorMessage);
        return;
      }
      if (Object.hasOwn(error, "errors")) {
        //Errors from yup validation
        setError(error.path, error.message);
        return;
      }
      //Another type of errors
      console.error("Error submitting signup: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {isUpdating && <Spinner />}

      <View style={styles.imagesWrapper}>
        <PlatifyLogo />
      </View>
      <Typography variant="h5" style={styles.title}>
        Register account
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
        Hello there, register to continue
      </Typography>
      <TextField
        label="Email"
        error={form.email.error}
        name="email"
        placeholder="Email"
        onChange={(text) => handleChangeForm(text, "email")}
      />
      <TextField
        label="Password"
        placeholder="Password"
        error={form.password.error}
        name="password"
        onChange={(text) => handleChangeForm(text, "password")}
        secureTextEntry
      />
      <TextField
        label="Confirm password"
        placeholder="Confirm password"
        name="confirmPassword"
        error={form.confirmPassword.error}
        onChange={(text) => handleChangeForm(text, "confirmPassword")}
        secureTextEntry
      />
      <Button onPress={handleSignUpSubmit}>Sign up</Button>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">Already have an account?</Typography>
        <Button variant="ghost" onPress={() => navigation.navigate("login")}>
          Login
        </Button>
      </View>
      {isSuccess && (
        <Toast
          status="success"
          title="Success!"
          content="Your account has been created."
        />
      )}
    </View>
  );
};

export default SignUp;

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
