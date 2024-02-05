import { View, StyleSheet } from "react-native";

export const InputWrapper = ({ children }) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    gap: 2,
    justifyContent: "flex-start",
  },
});
