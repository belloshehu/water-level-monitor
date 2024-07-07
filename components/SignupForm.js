import { View, Text, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { CustomButton } from "./CustomButton";
import { InputField } from "./InputField";
import { FontAwesome } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SignupForm = ({ navigation, onAuthenticate }) => {
  return (
    <KeyboardAwareScrollView style={{ flex: 1, position: "relative" }}>
      <View style={{ ...styles.container }}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordRepeat: "",
          }}
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
            passwordRepeat: yup
              .string()
              .min(
                8,
                ({ min }) => `Password Repeat must be atleast ${min} characters`
              )
              .required("Password Repeat is required")
              .matches(/[a-z]+/, "Must contain atleast one lowercase character")
              .matches(/\d+/, "Must contain atleast one number"),
          })}
          onSubmit={async (values) => {
            await onAuthenticate(values.email, values.password);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
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

              <InputField
                errors={errors}
                values={values}
                touched={touched}
                name={"password"}
                placeholder={"Password"}
                secured={true}
                label={"Password"}
                changeHandler={handleChange}
                blurHandler={handleBlur}
                value={values.password}
                withIcon
                icon={<FontAwesome name={"lock"} size={24} color="#FFA500" />}
              />

              <InputField
                errors={errors}
                values={values}
                touched={touched}
                name={"passwordRepeat"}
                placeholder={"Repeat Password"}
                secured={true}
                label={"Repeat password"}
                changeHandler={handleChange}
                blurHandler={handleBlur}
                value={values.passwordRepeat}
                withIcon
                icon={<FontAwesome name={"lock"} size={24} color="#FFA500" />}
              />

              <CustomButton buttonText={"Submit"} pressHandler={handleSubmit} />

              <View style={styles.signupTextWrapper}>
                <Text
                  style={styles.text}
                  onPress={() => navigation.navigate("Login")}>
                  Login instead
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
    height: "90%",
    borderWidth: 2,
    borderColor: "#FFA500",
    rowGap: 10,
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
