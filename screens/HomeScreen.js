import { StyleSheet, Text, View } from "react-native";
import { LevelTextIndicator } from "../components/LevelTextIndicator";
import { MenuList } from "../components/MenuList";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, welcome back</Text>
      <LevelTextIndicator level={60} />
      <MenuList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#ffa500",
    color: "white",
  },
  text: {
    fontSize: 18,
  },
});
