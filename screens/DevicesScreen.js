import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import useBleManager from "../hooks/useBleManager";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../components/CustomButton";
import { DevicesList } from "../components/DevicesList";
import { Device } from "../components/Device";

export const DevicesScreen = ({ navigation }) => {
	const { level } = useSelector((store) => store.level);
	const [triggerScanning, setTriggerScanning] = useState(true);
	const dispatch = useDispatch();
	const {
		requestPermission,
		scanDevices,
		connectToDevice,
		allDevices,
		disconnectDevice,
		connectedDevice,
	} = useBleManager();

	const scanForDevices = useCallback(async () => {
		console.log("scanning");
		const isPermissionEnabled = await requestPermission();
		if (isPermissionEnabled) {
			scanDevices();
		}
	}, []);

	useEffect(() => {
		const startScanning = async () => {
			await scanForDevices();
		};
		startScanning();
		console.log(allDevices);
		console.log(allDevices[0]?.localName);
		console.log(connectedDevice);
	}, [triggerScanning]);

	return (
		<View style={styles.container}>
			<View style={styles.connectedDeviceWrapper}>
				<Text>Connected device</Text>
				{!connectedDevice && (
					<Device
						connect={connectToDevice}
						disconnect={disconnectDevice}
						peripheral={connectedDevice}
					/>
				)}
			</View>
			<View style={styles.scanningWrapper}>
				<>
					<ActivityIndicator size={"large"} color={"#ffa500"} />
					<Text>Scanning for level monitor</Text>
				</>
				{/* shows list of discovered devices */}
				{allDevices && (
					<DevicesList
						title={"Scanned devices"}
						connectHandler={connectToDevice}
						devices={allDevices}
						disconnectHandler={disconnectDevice}
					/>
				)}
				<CustomButton
					buttonText={"Discover level monitors"}
					pressHandler={() => setTriggerScanning(!triggerScanning)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "rgba(255, 165, 0, 0)",
		color: "white",
	},
	scanningWrapper: {
		flex: 0.7,
		justifyContent: "center",
		gap: 30,
		alignItems: "center",
	},
	connectedDeviceWrapper: {
		width: "100%",
		borderBottomWidth: 2,
		borderBottomColor: "#ffa500",
		paddingVertical: 20,
		flex: 0.2,
	},
});
