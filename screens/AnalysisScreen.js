import { StyleSheet, Text, View } from "react-native";
import WaterConsumptionAnalysis from "../components/analysis/WaterConsumptionAnalysis";
import PowerConsumptionAnalysis from "../components/analysis/PowerConsumptionAnalysis";
import AnalysisRecord from "../components/analysis/AnalysisRecord";

export const AnalysisScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<WaterConsumptionAnalysis perday={200} total={10000} />
			<PowerConsumptionAnalysis perDay={2} total={100} />
			{/* <AnalysisRecord title={"August 2023 - June 2024"} /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 10,
		padding: 10,
		paddingTop: 40,
		backgroundColor: "rgba(255, 165, 0, 0)",
		color: "white",
	},
});
