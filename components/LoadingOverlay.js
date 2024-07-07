import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

export const LadingOverlay = ({ message }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{message}</Text>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 32,
  },
});
