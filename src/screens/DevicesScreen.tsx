import { connectToDevice } from "@/redux/features/ble/listener";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, FAB, Text } from "react-native-paper";
import { colors } from "@/contants/theme";
import React, { useEffect } from "react";
import {
	clearConnectedtDevice,
	startListening,
	startScanning,
} from "@/redux/features/ble/bleSlice";

const DevicesScreen = ({ navigation }) => {
	const dispatch = useAppDispatch();
	const { allDevices: discoveredDevices, connectedDevice } = useAppSelector(
		(state) => state.ble
	);
	const user = useAppSelector((state) => state.auth.user);

	const scan = () => {
		dispatch(startScanning());
	};

	const handleDisconnect = () => {
		dispatch(clearConnectedtDevice());
	};

	useEffect(() => {
		scan();
	}, []);

	const onDeviceSelected = (deviceId: any) => {
		dispatch(connectToDevice(deviceId));
		dispatch(startListening());
		setTimeout(() => {
			if (connectedDevice) {
				navigation.navigate("Tank" as never);
			}
		}, 2000);
	};

	return (
		<View style={styles.container}>
			<Text variant="headlineMedium" style={styles.text}>
				{connectedDevice ? "Tap to disconnect" : "Tap to connect"}
			</Text>

			<FlatList
				style={styles.list}
				contentContainerStyle={styles.listContent}
				data={discoveredDevices}
				renderItem={({ item }) => {
					const selectDevice = () => {
						onDeviceSelected(item);
					};

					return (
						<Button
							icon={connectedDevice ? "link" : "link-off"}
							mode="contained"
							style={styles.deviceBtn}
							onPress={selectDevice}
						>
							{item.name}
						</Button>
					);
				}}
				ListEmptyComponent={
					<>
						<Text variant="bodyLarge" style={styles.description}>
							Restart the device again if does not connect.
						</Text>
						<Button onPress={scan} mode="contained">
							Scan again
						</Button>
					</>
				}
			/>
			<View
				style={{
					flexDirection: "row",
					gap: 10,
					width: "100%",
					justifyContent: user ? "center" : "flex-start",
				}}
			>
				{connectedDevice && (
					<Button onPress={handleDisconnect} mode="elevated">
						Disconnect
					</Button>
				)}

				{!user && (
					<Button
						onPress={() => {
							navigation.navigate("Tank");
						}}
						mode="elevated"
						icon={"cylinder"}
					>
						Go to tank
					</Button>
				)}
			</View>
			{!user && (
				<FAB
					// label="Home"
					icon={"home"}
					color={colors.primary}
					onPress={() => {
						navigation.navigate("Welcome");
					}}
					style={styles.fab}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: "auto",
		flex: 0.7,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		padding: 20,
		paddingTop: 50,
		backgroundColor: "rgba(255, 165, 0, 0)",
	},
	list: {
		marginTop: 0,
		marginHorizontal: 20,
		width: "100%",
	},
	listContent: {
		justifyContent: "center",
		alignItems: "center",
		// flex: 1,
	},
	deviceBtn: {
		// backgroundColor: colors.primary,
		justifyContent: "center",
		borderRadius: 15,
		width: "100%",
		padding: 10,
	},
	deviceTxt: {
		color: "white",
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
	},
	text: {
		color: colors.primary,
	},
	description: {
		textAlign: "center",
		marginBottom: 20,
	},
	fab: {
		position: "absolute",
		margin: 16,
		right: 0,
		bottom: 0,
	},
});

export default DevicesScreen;
