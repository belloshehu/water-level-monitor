import Configuration from "./Configuration";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CleaningScheduleConfiguration() {
	return (
		<Configuration
			title={"Cleaning Schedule"}
			icon={<FontAwesome name="calendar" size={40} color="#ffa500" />}
		>
			<Text style={styles.text}>3 months interval</Text>
			<Text style={styles.text}>2 months ago</Text>
		</Configuration>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
		fontFamily: "cursive",
	},
});
