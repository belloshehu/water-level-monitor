import Configuration from "./Configuration";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PumpingMachineConfiguration() {
	return (
		<Configuration
			title={"Pumping Machine"}
			icon={
				<MaterialCommunityIcons name="water-pump" size={40} color="#ffa500" />
			}
		>
			<Text style={styles.text}>2KW</Text>
		</Configuration>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
		fontFamily: "cursive",
	},
});
