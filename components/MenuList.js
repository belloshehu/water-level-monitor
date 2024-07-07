import { StyleSheet, Text, View, FlatList } from "react-native";
import { menuItems } from "../data/menu";
import { MenuItem } from "./MenuItem";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";

export const MenuList = () => {
  const navigation = useNavigation();
  return (
    <FlatGrid
      itemDimension={130}
      data={menuItems}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <MenuItem item={item} navigation={navigation} />
      )}
      spacing={10}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginTop: 10,
  },
  iconWrapper: {
    color: "#000",
  },
  flatList: {
    marginTop: 10,
    flex: 1,
  },
});
