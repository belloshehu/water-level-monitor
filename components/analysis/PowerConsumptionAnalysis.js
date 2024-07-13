import Analysis from "./Analysis";
import { Entypo } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import AnalysisRecord from "./AnalysisRecord";
import Chart from "./Chart";

export default function PowerConsumptionAnalysis({ perDay, total }) {
	return (
		<Analysis
			title={"Power Consumption"}
			icon={<Entypo name="power-plug" size={34} color="#ffa500" />}
			modalChildren={<Text>Power consumption</Text>}
		>
			<View style={styles.analysisWrapper}>
				<Text style={styles.analysisText}>{perDay} kwh/day</Text>
				<Text style={styles.analysisText}>{total} kwh since August, 2024</Text>
			</View>
			<AnalysisRecord children={<Chart title={"Power consumption"} />} />
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
