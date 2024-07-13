import Analysis from "./Analysis";
import { Entypo } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import AnalysisRecord from "./AnalysisRecord";
import Chart from "./Chart";

export default function WaterConsumptionAnalysis({ perday, total }) {
	return (
		<Analysis
			title={"Water Consumption"}
			icon={<Entypo name="water" size={34} color="#ffa500" />}
			modalChildren={<Text>Water consumption</Text>}
		>
			<View style={styles.analysisWrapper}>
				<Text style={styles.analysisText}>{perday} liters/day</Text>
				<Text style={styles.analysisText}>
					{total} litres since August, 2024
				</Text>
			</View>
			<AnalysisRecord children={<Chart title={"Water consumption"} />} />
		</Analysis>
	);
}

const styles = StyleSheet.create({
	analysisWrapper: {
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
	},
	analysisText: {
		color: "#fff",
	},
});
