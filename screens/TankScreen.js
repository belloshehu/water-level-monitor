import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useSelector } from "react-redux";

export const TankScreen = () => {
  const { level } = useSelector((store) => store.level);
  return (
    <View style={styles.container}>
      <Text>View water level</Text>
      <View>
        <AnimatedCircularProgress
          fill={level}
          lineCap="round"
          backgroundColor="#ffa50"
          tintColor="#ff00ff"
          size={200}
          width={15}>
          {({ fill }) => {
            <View>
              <Text style={styles.levelText}>{fill}%</Text>
            </View>;
          }}
        </AnimatedCircularProgress>
      </View>
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
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});
