import { StyleSheet } from "react-native";
import { MenuItem } from "@/components/MenuItem";
import { useNavigation } from "@react-navigation/native";
import { FlatGrid } from "react-native-super-grid";
import { menuItems } from "@/data/menu";

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
		flex: 0.5,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		margin: "auto",
		marginTop: 10,
	},
	flatList: {
		marginTop: 10,
		flex: 0.5,
	},
});
