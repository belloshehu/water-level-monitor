import { View, StyleSheet, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ErrorMessage } from "formik";
/* 
    TextInput with label and error text
*/

export const InputField = ({ ...props }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputWrapper}>
        <FontAwesome name={props.iconName} size={24} color="#FFA500" />
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
    gap: 2,
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
