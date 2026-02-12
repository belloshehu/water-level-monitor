import Configuration from "./Configuration";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PumpConfigForm } from "./forms/PumpConfigForm";

export default function PumpingMachineConfiguration() {
	return (
		<Configuration
			title={"Pumping Machine"}
			icon={
				<MaterialCommunityIcons name="water-pump" size={40} color="#ffa500" />
			}
			modalChildren={<PumpConfigForm />}
		>
			<Text style={styles.text}>2KW</Text>
		</Configuration>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontFamily: "cursive",
	},
});
