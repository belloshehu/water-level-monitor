import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface PurityProps {
	remark: string;
	measurement: string;
	indicatorColor: string;
}
export default function Purity({
	remark,
	measurement,
	indicatorColor,
}: PurityProps) {
	return (
		<View style={[styles.container, { backgroundColor: indicatorColor }]}>
			<Text style={styles.text}>
				{remark} ({measurement})
			</Text>
			<Text variant="bodySmall">{`Water is ${remark.toLowerCase()}`}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		borderRadius: 20,
		backgroundColor: "red",
		// flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
		alignSelf: "flex-end",
		elevation: 10,
	},
	indicator: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: "#ffa500",
	},
	text: {
		fontFamily: "cursive",
		fontSize: 22,
		color: "#fff",
	},
	textWrapper: {
		marginTop: 20,
	},
});
