import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useSelector } from "react-redux";
import { FontAwesome6 } from "@expo/vector-icons";
import Purity from "./tank/Purity";

export const TankScreen = () => {
	const { level } = useSelector((store) => store.level);
	return (
		<View style={styles.container}>
			<Text>Water level</Text>
			<View style={styles.tank}>
				<FontAwesome6 name="glass-water" size={200} color="black" />
				<Text style={styles.levelText}>40%</Text>
			</View>
			<Purity
				indicatorColor={"green"}
				measurement={"90%-100%"}
				remark={"Good"}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		padding: 10,
		rowGap: 30,
		backgroundColor: "rgba(255, 165, 0, 0)",
		borderRadius: 50,
		margin: 20,
		marginTop: 30,
		color: "#fff",
	},
	levelText: {
		fontSize: 45,
		fontWeight: "bold",
		textAlign: "center",
		color: "#ffa500",
	},
	tank: {
		flexDirection: "row",
		width: "100%",
		gap: 10,
		justifyContent: "center",
		alignItems: "center",
		flex: 0.7,
	},
});
