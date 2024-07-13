import { StyleSheet, Text, View } from "react-native";
import { LevelTextIndicator } from "../components/LevelTextIndicator";
import { MenuList } from "../components/MenuList";
import { useSelector } from "react-redux";

export const HomeScreen = () => {
	const { level } = useSelector((store) => store.level);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hi, welcome back</Text>
			<LevelTextIndicator level={level} />
			<MenuList />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		paddingTop: 40,
		backgroundColor: "rgba(255, 165, 0, 0)",
		color: "black",
	},
	text: {
		fontSize: 18,
	},
});
