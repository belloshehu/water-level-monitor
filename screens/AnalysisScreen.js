import { StyleSheet, Text, View } from "react-native";
import WaterConsumptionAnalysis from "../components/analysis/WaterConsumptionAnalysis";
import PowerConsumptionAnalysis from "../components/analysis/PowerConsumptionAnalysis";
import AntDesign from "@expo/vector-icons/AntDesign";

export const AnalysisScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<AntDesign
					name="piechart"
					size={30}
					color="black"
					style={styles.icon}
				/>
				<View
					style={{ textAlign: "center", alignItems: "center", color: "white" }}
				>
					<Text>Consumption</Text>
					<Text style={styles.headerText}>Analysis</Text>
				</View>
				<Text style={styles.descriptionText}>
					View analysis of water and power consumption
				</Text>
			</View>
			<View style={styles.analysisWrapper}>
				<WaterConsumptionAnalysis perday={200} total={10000} />
				<PowerConsumptionAnalysis perDay={2} total={100} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
		gap: 10,
		padding: 20,
		paddingTop: 50,
		backgroundColor: "rgba(255, 165, 0, 0)",
		color: "white",
	},
	header: {
		backgroundColor: "#ffa500",
		borderRadius: 20,
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		flex: 0.33,
		gap: 10,
		elevation: 10,
	},
	headerText: {
		fontSize: 42,
		color: "#fff",
		fontWeight: "bold",
	},
	descriptionText: {
		textAlign: "center",
		color: "white",
	},
	analysisWrapper: {
		flex: 0.67,
		width: "100%",
		gap: 20,
		padding: 10,
	},
	icon: {
		position: "absolute",
		top: 20,
		right: 20,
	},
});
