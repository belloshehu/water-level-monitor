import { CleaningScheduleForm } from "./forms/CleaningScheduleForm";
import { FontAwesome } from "@expo/vector-icons";
import { useAppSelector } from "@/hooks/redux";
import Configuration from "./Configuration";
import { StyleSheet } from "react-native";
import ConfigText from "./ConfigText";

export default function CleaningScheduleConfiguration() {
	const config = useAppSelector((state) => state.config.cleaningSchedule);
	// const nextCleaningDate = config.previousDate? config.previousDate+config.interval:
	const handleConfig = (val: any) => {
		console.log("Configuring cleaning schedule:", val);
	};
	return (
		<Configuration
			title={"Cleaning Schedule"}
			icon={<FontAwesome name="calendar" size={20} color="#ffa500" />}
			modalChildren={<CleaningScheduleForm configure={handleConfig} />}
		>
			<ConfigText keyText="Interval" value={`${config.interval} days`} />
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
