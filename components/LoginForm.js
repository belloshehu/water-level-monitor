import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Button,
  Alert,
} from "react-native";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { InputWrapper } from "./InputWrapper";
import { FontAwesome } from "@expo/vector-icons";
import { FormError } from "./FormError";
import { useState } from "react";
import { CustomButton } from "./CustomButton";
import { InputField } from "./InputField";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const LoginForm = ({ navigation, onAuthenticate }) => {
  const blurHandler = (name, handleBlur) => {
    handleBlur(name);
    setBgColor("rgba(217, 217, 217, 0.4)");
    setZindex(1);
  };
  const focusHandler = () => {
    setBgColor("#FFA500");
    setZindex(3);
  };
  const handleForgotPassword = () => {
    navigation.navigate("forgot-password");
  };
  return (
    <KeyboardAwareScrollView style={{ flex: 1, position: "relative" }}>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email("Please enter valid email")
              .required("Email is required"),
            password: yup
              .string()
              .min(8, ({ min }) => `Password must be atleast ${min} characters`)
              .required("Password is required")
              .matches(/[a-z]+/, "Must contain atleast one lowercase character")
              .matches(/\d+/, "Must contain atleast one number"),
          })}
          onSubmit={async (values) => {
            await onAuthenticate(values.email, values.password);
          }}>
          {({ handleSubmit, values, handleChange, handleBlur }) => (
            <View style={styles.formWrapper}>
              <InputField
                name={"email"}
                placeholder={"Email Address"}
                type={"email-address"}
                label={"Email"}
                changeHandler={handleChange}
                blurHandler={handleBlur}
                value={values.email}
                withIcon
                icon={
                  <FontAwesome name={"envelope"} size={24} color="#FFA500" />
                }
              />

              <InputWrapper>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Text style={styles.label}>Password</Text>
                  <Text
                    style={{ ...styles.label }}
                    onPress={handleForgotPassword}>
                    Forgot password
                  </Text>
                </View>
                <View style={styles.inputWrapper}>
                  <FontAwesome name="lock" size={24} color="#FFA500" />
                  <TextInput
                    value={values.password}
                    name={"password"}
                    placeholder="Password"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                  />
                </View>
                <ErrorMessage
                  name="password"
                  render={(msg) => <Text style={styles.errorText}>{msg}</Text>}
                />
              </InputWrapper>
              <CustomButton buttonText={"Submit"} pressHandler={handleSubmit} />

              <View style={styles.signupTextWrapper}>
                <Text
                  style={styles.text}
                  onPress={() => navigation.navigate("Signup")}>
                  Create account
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: 10,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderWidth: 2,
    borderColor: "#FFA500",
  },
  input: {
    fontSize: 16,
    height: 40,
    borderWidth: 0,
    textAlignVertical: "center",
    width: "90%",
    color: "black",
  },
  inputWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 0,
    backgroundColor: "#fff",
    columnGap: 5,
    flexDirection: "row",
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    width: "100%",
    flex: 1,
    height: "100%",
  },
  label: {
    color: "#fff",
  },
  errorText: {
    fontSize: 12,
    color: "red",
  },
  signupTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
