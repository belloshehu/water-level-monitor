import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
	clearConnectedtDevice,
	startListening,
	startScanning,
} from "@/redux/features/ble/bleSlice";
import { connectToDevice } from "@/redux/features/ble/listener";
import { colors } from "@/contants/theme";
import { Button, Text } from "react-native-paper";

const DevicesScreen = () => {
	const nav = useNavigation();
	const dispatch = useAppDispatch();
	const { allDevices: discoveredDevices, connectedDevice } = useAppSelector(
		(state) => state.ble
	);

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
		nav.navigate("Tank" as never);
	};

	return (
		<View style={styles.container}>
			{
				<Text variant="headlineMedium" style={styles.text}>
					{connectedDevice ? "Tap to disconnect" : "Tap to connect"}
				</Text>
			}
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
			{connectedDevice && (
				<Button onPress={handleDisconnect} mode="elevated">
					Disconnect
				</Button>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		padding: 20,
		paddingTop: 50,
		backgroundColor: "rgba(255, 165, 0, 0)",
	},
	list: {
		marginTop: 30,
		marginHorizontal: 20,
		width: "100%",
	},
	listContent: {
		justifyContent: "center",
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
});

export default DevicesScreen;
