import { Text, View, StyleSheet } from "react-native";

export const FormError = ({ text, type }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ ...styles.text, color: type === "error" ? "red" : "white" }}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    elevation: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
