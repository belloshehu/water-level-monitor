import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavContainer } from "./navigators/NavContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto">
        <NavContainer />
      </StatusBar>
    </Provider>
  );
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
