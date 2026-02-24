import { View, StyleSheet } from "react-native";
import { WelcomeCarousel } from "./WelcomeCarousel";
import { CustomButton } from "../../components/CustomButton";
import { Button, FAB } from "react-native-paper";

const WelcomeScreen = ({ navigation }) => {
	const handleNavigateLogin = () => {
		navigation.navigate("Login");
	};
	const handleNavigateTank = () => {
		navigation.navigate("Tank");
	};
	const handleNavigateDevice = () => {
		navigation.navigate("Devices");
	};

	return (
		<View style={styles.container}>
			<WelcomeCarousel />
			<View style={styles.buttons}>
				<FAB icon={"devices"} label="Device" onPress={handleNavigateDevice} />
				<FAB icon={"cylinder"} label="Tank" onPress={handleNavigateTank} />
			</View>

			<Button
				mode="contained"
				style={{ marginVertical: 30 }}
				onPress={handleNavigateLogin}
			>
				Login
			</Button>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		backgroundColor: "rgba(255, 165, 0, 0.6)",
		padding: 20,
	},
	buttonWrapper: {
		paddingVertical: 10,
		width: "100%",
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 30,
		flexWrap: "wrap",
		padding: 10,
		borderWidth: 0,
		width: "100%",
		borderRadius: 10,
		borderColor: "#fff",
		// backgroundColor: "#fff",
		elevation: 0,
		position: "absolute",
		bottom: "3%",
	},
});

export default WelcomeScreen;
