import { Feather } from "@expo/vector-icons";
import { Text, StyleSheet, View } from "react-native";

// Shows water level in percentage of the tank capacity
export const LevelTextIndicator = ({ level }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <Text style={styles.levelNumber}>{level}</Text>
        <View style={styles.percentIconWrapper}>
          <Feather name="percent" color={"black"} size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#ffa500",
    elevation: 10,
    color: "#fff",
    width: "100%",
    height: 150,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  innerWrapper: {
    position: "relative",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  levelNumber: {
    fontSize: 105,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  percentIconWrapper: {
    position: "absolute",
    top: 0,
    right: 5,
    padding: 5,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.42)",
  },
});
