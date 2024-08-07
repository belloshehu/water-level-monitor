import { View, Text, StyleSheet, TextInput } from "react-native";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { InputWrapper } from "./InputWrapper";
import { FontAwesome } from "@expo/vector-icons";
import { CustomButton } from "./CustomButton";
import { InputField } from "./InputField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownFormik from "./DropDownFormik";
import {
  pumpingMachines as pumpingMachinesCategories,
  tanks as tankCategories,
} from "../data/settings";
import { useState } from "react";

export const SettingsForm = ({ navigation, configure }) => {
  const [tanks, setTanks] = useState(tankCategories);
  const [pumpingMachines, setPumpingMachines] = useState(
    pumpingMachinesCategories
  );
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
    <KeyboardAwareScrollView
      style={{ flex: 1, position: "relative" }}
      contentContainerStyle={{
        flex: 1,
        marginVertical: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View style={styles.container}>
        <Formik
          initialValues={{
            tankType: tanks[0],
            tankHeight: 0,
            tankDiameter: 0,
            pumpingMachineType: pumpingMachines[0],
            pumpingMachineHorsePower: 0,
          }}
          validationSchema={yup.object().shape({
            tankType: yup.object().shape({
              label: yup.string().required(),
              value: yup.object().shape({
                height: yup.number().required(),
                diameter: yup.number().required(),
              }),
            }),
            tankHeight: yup
              .number()
              .min(50, "Tank height cannot be less than 50 cm")
              .required("Tank height is required"),
            tankDiameter: yup
              .number()
              .min(0, "Tank diameter cannot be less than 0 cm")
              .required("Tank diameter is required"),
            pumpingMachineType: yup.object().shape({
              label: yup.string().required(),
              value: yup.object().shape({
                horsePower: yup.object().shape({
                  value: yup.number().required(),
                  unit: yup.string().required(),
                }),
                flowRate: yup.object().shape({
                  value: yup.number().required(),
                  unit: yup.string().required(),
                }),
              }),
            }),
            pumpingMachineHorsePower: yup
              .number()
              .min(0, "Horse power must be greater than 0")
              .required("Horse power rating is required"),
          })}
          onSubmit={async (values) => {
            // await onAuthenticate(values.email, values.password);
            await configure(values);
          }}>
          {({ handleSubmit, values, handleChange, handleBlur, setValues }) => (
            <View style={styles.formWrapper}>
              <View style={styles.fieldset}>
                <Text style={styles.legend}>Tank settings</Text>

                <DropDownFormik
                  placeholder={"Type"}
                  name={"tankType"}
                  items={tanks}
                  key={"tank"}
                  relatedFields={["diameter", "height"]}
                />
                <InputField
                  name={"tankHeight"}
                  placeholder={"Height"}
                  iconName={"size"}
                  type={"number"}
                  label={"Height"}
                  changeHandler={handleChange}
                  blurHandler={handleBlur}
                  value={values.tankHeight}
                />
                <InputField
                  name={"tankDiameter"}
                  placeholder={"Diameter"}
                  iconName={"tape"}
                  type={"number"}
                  label={"Diameter"}
                  changeHandler={handleChange}
                  blurHandler={handleBlur}
                  value={values.tankDiameter}
                />
              </View>

              <View style={styles.fieldset}>
                <Text style={styles.legend}>Pumping machine</Text>
                <DropDownFormik
                  placeholder={"Type"}
                  name={"pumpingMachineType"}
                  label={"Type"}
                  items={pumpingMachines}
                  key={"pumpingMachineType"}
                />

                <InputField
                  name={"pumpingMachineHorsePower"}
                  placeholder={"Horse power"}
                  iconName={"size"}
                  type={"number"}
                  label={"Horse power"}
                  changeHandler={handleChange}
                  blurHandler={handleBlur}
                  value={
                    values.pumpingMachineType?.value?.horsePower?.value ||
                    values.pumpingMachineHorsePower
                  }
                />
              </View>
              <View style={{ width: "100%", padding: 10 }}>
                <CustomButton
                  buttonText={"Save"}
                  bgColor={""}
                  pressHandler={handleSubmit}
                />
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
    flex: 0.9,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: 10,
    padding: 20,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    borderRadius: 0,
    backgroundColor: "#fff",
    columnGap: 5,
    flexDirection: "row",
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  formWrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    width: "100%",
    flex: 1,
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
  fieldset: {
    borderWidth: 1,
    borderColor: "rgba(50, 50, 50, 0.3)",
    padding: 5,
    paddingVertical: 25,
    width: "100%",
    position: "relative",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  legend: {
    color: "black",
    position: "absolute",
    top: -15,
    left: 5,
    backgroundColor: "#ffa500",
    fontSize: 18,
  },
});
