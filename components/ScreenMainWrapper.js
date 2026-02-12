import { StyleSheet, View } from "react-native";

export default function ScreenMainWrapper({ children }) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		gap: 20,
		padding: 10,
	},
});
