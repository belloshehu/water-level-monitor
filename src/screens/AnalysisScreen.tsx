import { StyleSheet, Text, View } from "react-native";
import WaterConsumptionAnalysis from "../components/analysis/WaterConsumptionAnalysis";
import PowerConsumptionAnalysis from "../components/analysis/PowerConsumptionAnalysis";
import AntDesign from "@expo/vector-icons/AntDesign";
import ScreenHeader from "../components/ScreenHeader";
import ScreenMainWrapper from "../components/ScreenMainWrapper";

const AnalysisScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<ScreenHeader
				icon={<AntDesign name="piechart" size={30} color="black" />}
				pageTitle={"Analysis"}
				description={"View analysis of water and power consumption"}
			/>

			<ScreenMainWrapper>
				<WaterConsumptionAnalysis perday={200} total={10000} />
				<PowerConsumptionAnalysis perDay={2} total={100} />
			</ScreenMainWrapper>
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
	},
});

export default AnalysisScreen;
