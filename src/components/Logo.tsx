import { Text, StyleSheet } from "react-native";

export const Logo = () => {
	return <Text style={styles.logo}>LevelMon</Text>;
};

const styles = StyleSheet.create({
	logo: {
		flex: 0.1,
		fontSize: 25,
		fontWeight: "bold",
		color: "white",
		textShadowOffset: {
			width: -2,
			height: 4,
		},
	},
});
