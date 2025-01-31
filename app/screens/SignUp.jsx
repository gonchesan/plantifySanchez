import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigation } from "@react-navigation/native";
import { AUTH_ERRORS_MAP } from "@/constants/Errors";
import { signUpSchema } from "@/validations/signUpSchema";

import { deleteSesion, insertSession } from "@/config/dbSqlite";
import { useSignUpMutation } from "@/services/authService";
import { setUser } from "@/features/auth/authSlice";

import Button from "@/components/core/Button";
import TextField from "@/components/core/TextField";
import Spinner from "@/components/core/Spinner.jsx";

const SignUp = () => {
  const navigation = useNavigation();
  // const [triggerSignUp, { isLoading, isError }] = useLoginMutation();
  const [triggerSignUp, { isLoading: isUpdating, isError }] =
    useSignUpMutation();
  const dispatch = useDispatch();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

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

      //TODO show success
      // dispatch(emptyCart());
    } catch (error) {
      // Errors from Google
      if (Object.hasOwn(error, "data")) {
        //TODO error of mappings.
        const errorMessage = AUTH_ERRORS_MAP[error.data.error.message];
        console.log(errorMessage);
        return;
      }
      if (Object.hasOwn(error, "errors")) {
        //Errors from yup validation
        //TODO show errrors
        setError(error.path, error.message);
        return;
      }
      //Another type of errors
      //TODO show errrors
      console.error("Error submitting signup: ", error);
    }
  };

  return (
    <View style={{ paddingHorizontal: 24, paddingTop: 24, gap: 16 }}>
      {isUpdating && <Spinner />}

      <Text>SignUp view</Text>
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
      <Button onPress={() => navigation.navigate("login")}>Login</Button>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
