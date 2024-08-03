import Configuration from "./Configuration";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TankConfigForm } from "./forms/TankConfigForm";

export default function TankConfiguration() {
	return (
		<Configuration
			title={"Tank"}
			icon={
				<MaterialCommunityIcons name="cylinder" size={40} color="#ffa500" />
			}
			modalChildren={<TankConfigForm />}
		>
			<Text style={styles.text}>2m (Hieght)</Text>
			<Text style={styles.text}>2000 litre</Text>
		</Configuration>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
		color: "#000",
		textAlign: "center",
		fontFamily: "cursive",
	},
});
