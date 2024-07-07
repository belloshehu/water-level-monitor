import { StyleSheet, Text, View } from "react-native";

export const AnalysisScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Analysis</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffa500",
    color: "white",
  },
});
