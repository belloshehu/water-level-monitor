import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TankConfigForm } from "./forms/TankConfigForm";
import { useAppSelector } from "@/hooks/redux";
import Configuration from "./Configuration";
import { StyleSheet } from "react-native";
import ConfigText from "./ConfigText";

export default function TankConfiguration() {
	const config = useAppSelector((state) => state.config.tank);
	const handleConfig = (val: any) => {
		console.log("Handling tank configuration:", val);
	};
	return (
		<Configuration
			title={"Tank"}
			icon={
				<MaterialCommunityIcons name="cylinder" size={20} color="#ffa500" />
			}
			modalChildren={<TankConfigForm configure={handleConfig} />}
		>
			<ConfigText keyText="Height" value={`${config.height}cm`} />
			<ConfigText keyText="Capacity" value={`${config.capacity}litres`} />
		</Configuration>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		color: "#000",
		textAlign: "center",
		fontFamily: "cursive",
	},
});
