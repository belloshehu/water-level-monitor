import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { colors } from "@/contants/theme";
import React from "react";

const ConfigText = ({ keyText, value }: { keyText: string; value: string }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.key}>{keyText}</Text>
			<Text style={styles.value}>{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 10,
		borderRadius: 20,
		padding: 3,
		paddingHorizontal: 5,
	},
	value: {
		// fontSize: 12,
		color: colors.primary,
		backgroundColor: "#000",
		borderRadius: 10,
		paddingHorizontal: 5,
		width: "30%",
		textAlign: "right",
	},
	key: {
		width: "50%",
		color: "#888",
		paddingHorizontal: 10,
		fontFamily: "cursive",
		fontWeight: "bold",
	},
});
export default ConfigText;
