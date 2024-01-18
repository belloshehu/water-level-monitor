import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavContainer } from "./navigators/NavContainer";

export default function App() {
  return <NavContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
});
