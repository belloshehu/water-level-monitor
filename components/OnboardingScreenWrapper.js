import { StyleSheet, View, Text, ScrollView } from "react-native";

export const OnboardingScreenWrapper = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500",
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
});
