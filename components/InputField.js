import { View, StyleSheet, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ErrorMessage } from "formik";
/* 
    TextInput with label and error text
*/

export const InputField = ({ withIcon = false, ...props }) => {
  return (
    <View style={styles.wrapper}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <View style={styles.inputWrapper}>
        {withIcon && props?.icon}
        <TextInput
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          style={styles.input}
          keyboardType={props.type || "default"}
          secureTextEntry={props.secured || false}
          onChangeText={props.changeHandler(props.name)}
          onBlur={props.blurHandler(props.name)}
        />
      </View>
      <ErrorMessage
        name={props.name}
        render={(msg) => <Text style={styles.errorText}>{msg}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    rowGap: 2,
    justifyContent: "flex-start",
  },
  label: {
    color: "#fff",
  },
  errorText: {
    fontSize: 12,
    color: "red",
  },
  input: {
    zIndex: 0,
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
});
