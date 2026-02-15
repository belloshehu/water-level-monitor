import { readPurityFromDevice } from "@/redux/features/ble/listener";
import { getPurityColor, getPurityRemark } from "@/utils/purity";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { LiquidGauge } from "react-native-liquid-gauge";
import { StyleSheet, Text, View } from "react-native";
import Purity from "./tank/Purity";
import { useEffect } from "react";
import { startListening } from "@/redux/features/ble/bleSlice";
import { useNavigation } from "@react-navigation/native";

const TankScreen = () => {
	const {
		retrievedLevel: level,
		retrievedPurity,
		retrievedPumpStatus,
		connectedDevice,
	} = useAppSelector((state) => state.ble);
	console.log("level in tank:", level, retrievedPumpStatus, retrievedPurity);
	const dispatch = useAppDispatch();
	const nav = useNavigation();
	const color = getPurityColor(retrievedPurity);

	useEffect(() => {
		if (!connectedDevice) {
			nav.navigate("Devices" as never);
		}
	}, [connectedDevice]);

	useEffect(() => {
		dispatch(startListening());
		dispatch(readPurityFromDevice());
	});
	return (
		<View style={styles.container}>
			{/* <Text style={styles.title}>Water level</Text> */}
			<View style={styles.tank}>
				<LiquidGauge
					config={{
						circleColor: color,
						textColor: "#aaa",
						waveTextColor: "#aaa",
						waveColor: "#ffa500",
						circleThickness: 0.15,
						textVertPosition: 0.7,
						waveAnimateTime: 800,
						waveRiseTime: 400,
						waveHeight: 0.07,
					}}
					value={parseInt(level)}
					width={300}
					height={300}
				/>
			</View>

			<View
				style={{
					backgroundColor: "#fff",
					borderRadius: 20,
					width: "100%",
					padding: 10,
					flex: 0.1,
				}}
			>
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						gap: 4,
					}}
				>
					{/* <Text style={styles.levelText}>{level || DEFAULT_LEVEL}</Text> */}
					<Text>
						{retrievedPumpStatus === "0" ? "Not pumping" : "Pumping ..."}
					</Text>
				</View>
			</View>
			{/* <View style={styles.setpointWrapper}>
				<Text>Stop Pumping at 90%</Text>
				<Text>Starts Pumping at 40%</Text>
			</View> */}
			<Purity
				indicatorColor={color}
				measurement={retrievedPurity}
				remark={getPurityRemark(retrievedPurity)}
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
		rowGap: 20,
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
		flex: 1,
	},
	setpointWrapper: {
		backgroundColor: "#aaa",
		padding: 10,
		borderRadius: 10,
		color: "white",
	},
});

export default TankScreen;
