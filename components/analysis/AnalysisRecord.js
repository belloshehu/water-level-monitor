import { View, StyleSheet } from "react-native";

export default function AnalysisRecord({ children }) {
	return (
		<View styles={styles.container}>
			<View style={styles.childrenWrapper}>{children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		marginVertical: 20,
	},
	childrenWrapper: {
		flex: 0.4,
	},
});
