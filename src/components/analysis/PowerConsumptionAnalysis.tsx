import Analysis from "@/components/analysis/Analysis";
import { Entypo } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import Chart from "@/components/analysis/Chart";

export default function PowerConsumptionAnalysis({ perDay, total }) {
	return (
		<Analysis
			title={"Power Consumption"}
			icon={<Entypo name="power-plug" size={34} color="#ffa500" />}
			modalChildren={<Chart title={"Power consumption"} data={null} />}
		>
			<View style={styles.analysisWrapper}>
				<Text style={styles.analysisText}>{perDay} kwh/day</Text>
				<Text style={styles.analysisText}>{total} kwh since August, 2024</Text>
			</View>
		</Analysis>
	);
}

const styles = StyleSheet.create({
	analysisWrapper: {
		justifyContent: "center",
		alignItems: "center",
	},
	analysisText: {
		color: "#000",
	},
});
