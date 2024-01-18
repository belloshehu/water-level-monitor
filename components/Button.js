import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({ buttonText, pressHandler, bgColor, textColor }) => {
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={{ ...styles.button, backgroundColor: bgColor || "#FFA500" }}>
      <Text style={{ ...styles.text, color: textColor || "white" }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: -4,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.3,
    elevation: 4,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
