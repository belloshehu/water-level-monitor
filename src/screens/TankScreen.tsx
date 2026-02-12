import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Purity from "./tank/Purity";
import { LiquidGauge } from "react-native-liquid-gauge";
import { useAppSelector } from "@/hooks/redux";

const DEFAULT_LEVEL = 80; // Default water level if not available in the store (in percentage)
export const TankScreen = () => {
	const { level } = useAppSelector((state) => state.level);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Water level</Text>
			<View style={styles.tank}>
				<LiquidGauge
					config={{
						circleColor: "#ffa500",
						textColor: "#aaa",
						waveTextColor: "#aaa",
						waveColor: "#ffa500",
						circleThickness: 0.15,
						textVertPosition: 0.7,
						waveAnimateTime: 800,
						waveRiseTime: 400,
						waveHeight: 0.07,
					}}
					value={level || DEFAULT_LEVEL}
					width={300}
					height={300}
				/>
			</View>
			<View style={{ alignItems: "center", justifyContent: "center", gap: 4 }}>
				<Text style={styles.levelText}>{level || DEFAULT_LEVEL}</Text>
				<Text>Pumping</Text>
			</View>
			{/* <View style={styles.setpointWrapper}>
				<Text>Stop Pumping at 90%</Text>
				<Text>Starts Pumping at 40%</Text>
			</View> */}
			<Purity
				indicatorColor={"#ffa500"}
				measurement={"90%-100%"}
				remark={"Good"}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		padding: 10,
		rowGap: 206,
		backgroundColor: "rgba(255, 165, 0, 0)",
		borderRadius: 50,
		margin: 20,
		marginTop: 30,
		color: "#fff",
	},
	title: {
		fontSize: 22,
		color: "#ffa500",
		fontWeight: "500",
	},
	levelText: {
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
		color: "#ffa500",
	},
	tank: {
		flexDirection: "row",
		width: "100%",
		gap: 10,
		justifyContent: "center",
		alignItems: "center",
		flex: 0.7,
	},
	setpointWrapper: {
		backgroundColor: "#aaa",
		padding: 10,
		borderRadius: 10,
		color: "white",
	},
});
