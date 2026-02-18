import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PumpConfigForm } from "./forms/PumpConfigForm";
import { useAppSelector } from "@/hooks/redux";
import Configuration from "./Configuration";
import { StyleSheet } from "react-native";
import ConfigText from "./ConfigText";

export default function PumpingMachineConfiguration() {
	const config = useAppSelector((state) => state.config.pumpingMachine);
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
			<ConfigText keyText="Horse power" value={`${config.horsePower}hp`} />
			<ConfigText keyText="Flow rate" value={`${config.flowRate} Litres/min`} />
		</Configuration>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontFamily: "cursive",
	},
});
