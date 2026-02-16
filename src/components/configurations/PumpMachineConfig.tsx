import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PumpConfigForm } from "./forms/PumpConfigForm";
import { StyleSheet, Text } from "react-native";
import Configuration from "./Configuration";

export default function PumpingMachineConfiguration() {
	const handleConfig = (val: any) => {
		console.log("Configuring pumping machine:", val);
	};
	return (
		<Configuration
			title={"Pumping Machine"}
			icon={
				<MaterialCommunityIcons name="water-pump" size={20} color="#ffa500" />
			}
			modalChildren={<PumpConfigForm configure={handleConfig} />}
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
