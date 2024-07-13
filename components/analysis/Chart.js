import { StyleSheet, Text, View } from "react-native";

export default function Chart({ data, title }) {
	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>Chart here</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	title: {
		color: "#fff",
		textAlign: "center",
	},
});
