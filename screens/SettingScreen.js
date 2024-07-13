import { StyleSheet, Text, View } from "react-native";
import { SettingsForm } from "../components/SettingsForm";
import { useState } from "react";
import PumpingMachineConfiguration from "../components/configurations/PumpMachineConfig";
import TankConfiguration from "../components/configurations/TankConfiguration";
import CleaningScheduleConfiguration from "../components/configurations/CleaningSchedule";

export const SettingScreen = ({ navigation }) => {
	const [isConfiguring, setIsConfiguring] = useState(false);

	const configureDevice = async () => {
		setIsConfiguring(true);
		try {
			// set device configuration
			const response = await logInUser(email, password);
			// dispatch(setAuthenticated(authToken));
		} catch (error) {
			Alert.alert("Configuration failed!");
		} finally {
			setIsConfiguring(false);
		}
	};

	if (isConfiguring) {
		return <LadingOverlay message={"Conguring device..."} />;
	}
	return (
		<View style={styles.container}>
			{/* <Text style={styles.headingText}>Configuration</Text> */}
			<PumpingMachineConfiguration />
			<TankConfiguration />
			<CleaningScheduleConfiguration />
			{/* <SettingsForm configure={configureDevice} /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		padding: 20,
		paddingTop: 50,
		color: "white",
		gap: 20,
	},
	headingText: {
		fontWeight: "bold",
		textAlign: "center",
		color: "black",
		fontSize: 20,
	},
});
