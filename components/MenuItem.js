import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const MenuItem = ({ item, navigation }) => {
  const { title, icon, url } = item;

  const handlePress = () => {
    navigation.navigate(url);
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 16,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    elevation: 1,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 150,
  },
  iconWrapper: {
    color: "#000",
  },
  title: {
    textAlign: "center",
  },
});
