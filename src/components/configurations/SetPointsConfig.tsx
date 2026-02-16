import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import Configuration from "./Configuration";
import SetPointsConfigForm from "./forms/SetPointsConfigForm";

export default function SetPointsConfiguration() {
	const handleConfig = (val: any) => {
		console.log("Handling tank configuration:", val);
	};
	return (
		<Configuration
			title={"Set Points"}
			icon={
				<MaterialCommunityIcons name="cylinder" size={20} color="#ffa500" />
			}
			modalChildren={<SetPointsConfigForm configure={handleConfig} />}
		>
			<Text style={styles.text}>2m (Upper)</Text>
			<Text style={styles.text}>2000 (Lower)</Text>
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
