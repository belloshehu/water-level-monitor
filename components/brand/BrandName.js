import { StyleSheet, Text } from "react-native";

export default function BrandName({ color = "#ffa500", fontSize = 30 }) {
	return <Text style={{ ...styles.brandText, color, fontSize }}>easeView</Text>;
}

const styles = StyleSheet.create({
	brandText: {
		fontFamily: "cursive",
		textAlign: "center",
		color: "#ffa500",
		fontSize: 30,
	},
});
