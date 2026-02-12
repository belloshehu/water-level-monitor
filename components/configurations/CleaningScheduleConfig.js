import Configuration from "./Configuration";
import { StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CleaningScheduleForm } from "./forms/CleaningScheduleForm";

export default function CleaningScheduleConfiguration() {
	return (
		<Configuration
			title={"Cleaning Schedule"}
			icon={<FontAwesome name="calendar" size={40} color="#ffa500" />}
			modalChildren={<CleaningScheduleForm />}
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
