import { Text, View, StyleSheet } from "react-native";

export const Logo = () => {
  return <Text style={styles.logo}>LevelMon</Text>;
};

const styles = StyleSheet.create({
  logo: {
    flex: 0.05,
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textShadowOffset: {
      width: -2,
      height: 4,
    },
    textShadowRadius: 2,
    textAlign: "center",
    width: "100%",
  },
});
