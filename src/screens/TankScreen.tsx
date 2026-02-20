import { readPurityFromDevice } from "@/redux/features/ble/listener";
import { getPurityColor, getPurityRemark } from "@/utils/purity";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { startListening } from "@/redux/features/ble/bleSlice";
import { useNavigation } from "@react-navigation/native";
import { LiquidGauge } from "react-native-liquid-gauge";
import { StyleSheet, Text, View } from "react-native";
import { Badge, FAB, useTheme } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "@/contants/theme";
import Purity from "./tank/Purity";
import { useEffect } from "react";

const TankScreen = ({ navigation }) => {
	const {
		retrievedLevel: level,
		retrievedPurity,
		retrievedPumpStatus,
		connectedDevice,
	} = useAppSelector((state) => state.ble);
	const user = useAppSelector((state) => state.auth.user);
	const { offSetPoint, onSetPoint } = useAppSelector(
		(state) => state.config.setPoints
	);
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

			<View style={styles.footer}>
				{/* Pumping status container */}
				<View style={styles.pumpingStateWrapper}>
					<View style={styles.horizontalWrapper}>
						<FontAwesome
							name={retrievedPumpStatus === "1" ? "spinner" : "stop"}
							color={colors.primary}
						/>
						<Text style={styles.pumpingStateText}>
							{retrievedPumpStatus === "0" ? "Not pumping" : "Pumping ..."}
						</Text>
					</View>
					<View style={styles.horizontalWrapper}>
						<Badge style={styles.badge} size={24}>
							{onSetPoint + "%"}
						</Badge>

						<Text style={styles.separator}>-</Text>
						<Badge style={styles.badge} size={24}>
							{offSetPoint + "%"}
						</Badge>
					</View>
				</View>
				<Purity
					indicatorColor={color}
					measurement={retrievedPurity}
					remark={getPurityRemark(retrievedPurity)}
				/>
			</View>
			{!user && (
				<FAB
					// label="Home"
					icon={"devices"}
					color={colors.primary}
					onPress={() => {
						navigation.navigate("Devices");
					}}
					style={styles.fab}
				/>
			)}
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
	horizontalWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 10,
	},
	verticalWrapper: {
		justifyContent: "space-between",
		alignItems: "center",
		gap: 10,
	},
	fab: {
		position: "absolute",
		margin: 5,
		right: -10,
		bottom: -10,
	},
	separator: {
		fontWeight: "bold",
		color: colors.primary,
	},
	badge: {
		backgroundColor: colors.primary,
		paddingHorizontal: 10,
	},
	pumpingStateText: {
		color: colors.primary,
		fontWeight: "400",
	},
	pumpingStateWrapper: {
		justifyContent: "space-between",
		alignItems: "center",
		gap: 10,
		borderRadius: 20,
		padding: 5,
	},
	footer: {
		width: "100%",
		backgroundColor: "#fff",
		borderRadius: 20,
		gap: 5,
		flex: 0.3,
		padding: 10,
	},
});

export default TankScreen;
