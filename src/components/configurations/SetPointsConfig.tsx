import SetPointsConfigForm from "./forms/SetPointsConfigForm";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppSelector } from "@/hooks/redux";
import Configuration from "./Configuration";
import { StyleSheet } from "react-native";
import ConfigText from "./ConfigText";

export default function SetPointsConfiguration() {
	const config = useAppSelector((state) => state.config.setPoints);
	return (
		<Configuration
			title={"Set Points"}
			icon={
				<MaterialCommunityIcons name="cylinder" size={20} color="#ffa500" />
			}
			modalChildren={<SetPointsConfigForm />}
		>
			<ConfigText keyText="Off" value={`${config.offSetPoint}%`} />
			<ConfigText keyText="On" value={`${config.onSetPoint}%`} />
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
