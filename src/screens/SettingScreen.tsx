import CleaningScheduleConfiguration from "../components/configurations/CleaningScheduleConfig";
import PumpingMachineConfiguration from "../components/configurations/PumpMachineConfig";
import TankConfiguration from "../components/configurations/TankConfiguration";
import ScreenMainWrapper from "../components/ScreenMainWrapper";
import { LadingOverlay } from "@/components/LoadingOverlay";
import ScreenHeader from "../components/ScreenHeader";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

export const SettingScreen = ({ navigation }) => {
	const [isConfiguring, setIsConfiguring] = useState(false);

	if (isConfiguring) {
		return <LadingOverlay message={"Conguring device..."} />;
	}
	return (
		<View style={styles.container}>
			<ScreenHeader
				icon={<Feather name="settings" size={24} color="black" />}
				pageTitle={"Settings"}
				description={"Make changes that fits you"}
			/>
			<ScreenMainWrapper>
				<PumpingMachineConfiguration />
				<TankConfiguration />
				<CleaningScheduleConfiguration />
			</ScreenMainWrapper>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		padding: 10,
		paddingTop: 50,
		color: "white",
		gap: 20,
	},
});
