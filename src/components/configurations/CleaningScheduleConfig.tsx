import { CleaningScheduleForm } from "./forms/CleaningScheduleForm";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import Configuration from "./Configuration";

export default function CleaningScheduleConfiguration() {
	const handleConfig = (val: any) => {
		console.log("Configuring cleaning schedule:", val);
	};
	return (
		<Configuration
			title={"Cleaning Schedule"}
			icon={<FontAwesome name="calendar" size={40} color="#ffa500" />}
			modalChildren={<CleaningScheduleForm configure={handleConfig} />}
		>
			<Text style={styles.text}>3 months interval</Text>
			<Text style={styles.text}>2 months ago</Text>
		</Configuration>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontFamily: "cursive",
	},
	title: {
		fontSize: 22,
		color: "#ffa500",
		fontWeight: "500",
	},
});
