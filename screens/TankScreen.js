import { StyleSheet, Text, View } from "react-native";

export const TankScreen = () => {
  return (
    <View style={styles.container}>
      <Text>View water level</Text>
      <Text style={styles.levelText}>40%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    rowGap: 10,
    backgroundColor: "#ffa500",
    color: "#fff",
  },
  levelText: {
    fontSize: 75,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});
