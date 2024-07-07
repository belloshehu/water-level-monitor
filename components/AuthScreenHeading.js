import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const AuthScreenHeading = ({ text, textStyle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <FontAwesome5 name="user-circle" size={35} color="white" />
        <Text style={[styles.headingText, textStyle]}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    backgroundColor: "#FFA500",
    padding: 0,
    width: "100%",
  },
  wrapper: {
    backgroundColor: "rgba(217, 217, 217, .0)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
    height: 100,
    borderRadius: 200,
  },
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
