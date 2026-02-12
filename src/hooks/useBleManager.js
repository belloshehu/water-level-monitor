import { useMemo, useState } from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import { BleManager } from "react-native-ble-plx";
import base64 from "react-native-quick-base64";
import { useDispatch } from "react-redux";
import { setLevel } from "@/redux/features/level/levelSlice";
import * as Device from "expo-device";

// const LEVEL_MONITOR_CHARACTERISTIC = "fa454bb9-94b7-4e4a-a223-5a3b28506b4a";
// const LEVEL_MONITOR_UUID = "bb10d136-fdf6-49a9-a223-f4c1af7dc7ba";
const LEVEL_MONITOR_UUID = "ABCD";
const LEVEL_MONITOR_CHARACTERISTIC = "1234";

const SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"; // UART service UUID
const CHARACTERISTIC_UUID_RX = "6E400002-B5A3-F393-E0A9-E50E24DCCA9E";
const DHTDATA_CHAR_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E";

const useBleManager = () => {
	const dispatch = useDispatch();
	const bleManager = useMemo(() => new BleManager(), []);
	const [allDevices, setAllDevices] = useState([]);
	const [connectedDevice, setConnectedDevice] = useState([]);

	const connectToDevice = async (device) => {
		try {
			console.log("connecting ...", device.localName);
			const deviceConnection = await bleManager.connectToDevice(device.id);
			setConnectedDevice(deviceConnection);
			await deviceConnection.discoverAllServicesAndCharacteristics();
			bleManager.stopDeviceScan();
			await startStreamingData(deviceConnection);
		} catch (error) {
			Alert.alert(`Failed to connect with ${device.localName}`, error);
		}
	};

	const disconnectDevice = () => {
		console.log("diconnecting ...");
		if (connectedDevice) {
			bleManager.cancelDeviceConnection(connectedDevice.id);
			setConnectedDevice(null);
		}
	};

	const isDuplicate = (previousDevices, nextDevice) => {
		return (
			previousDevices.findIndex((device) => nextDevice.id === device.id) > -1
		);
	};

	const scanDevices = () => {
		bleManager.startDeviceScan(
			null,
			{ allowDuplicates: false },
			(error, device) => {
				if (error) {
					Alert.alert("Scanning error", error.message);
					console.error(error);
				}
				if (device && device.localName === "ESP32 DHT11") {
					setAllDevices((previousDevices) => {
						if (!isDuplicate(previousDevices, device)) {
							return [...previousDevices, device];
						}
						return previousDevices;
					});

					bleManager.stopDeviceScan();
				} else {
					// clear the list if device not found
					setAllDevices([]);
				}
			}
		);
	};

	const requestAndroid31Permissions = async () => {
		// permission for Android 31 and above
		const bluetoothScanPermission = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
			{
				title: "Scan permission",
				message: "App requires bluetooth scanning",
				buttonPositive: "ok",
			}
		);

		const bluetoothFineLocationPermission = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			{
				title: "Scan permission",
				message: "App requires fine location",
				buttonPositive: "ok",
			}
		);

		const bluetoothConnectPermission = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
			{
				title: "Connection permission",
				message: "App requires bluetooth connecting",
				buttonPositive: "ok",
			}
		);
		return (
			bluetoothScanPermission === "granted" &&
			bluetoothConnectPermission === "granted" &&
			bluetoothFineLocationPermission === "granted"
		);
	};

	// normal permission for Android below 31
	// on Android, location permission alone is required if version of Android is 31 below above
	// else, three permissions are required: FINE_LOCATION, CONNECT, SCAN
	// on IOS, the permissions are not required

	const requestPermission = async () => {
		if (Platform.OS === "android") {
			if ((Device.platformApiLevel ?? -1) < 31) {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
					{
						title: "Location permission",
						message: "Bluetooth requires location",
						buttonPositive: "ok",
					}
				);
				return granted === PermissionsAndroid.RESULTS.GRANTED;
			} else {
				const isAndroid31PermissionGranted =
					await requestAndroid31Permissions();
				return isAndroid31PermissionGranted;
			}
		} else {
			return true;
		}
	};

	const onLevelMonitor = async (error, characteristic) => {
		if (error) {
			console.log(error);
			return;
		} else if (!characteristic?.value) {
			console.log("No data ");
		}
		const rawData = base64.decode(characteristic.value);
		const levelValue = Number(rawData[0].charCodeAt[0]);
		dispatch(setLevel(levelValue));
		console.log(rawData, levelValue);
	};

	const startStreamingData = async (device) => {
		if (device) {
			device.monitorCharacteristicForService(
				// SERVICE_UUID,
				// DHTDATA_CHAR_UUID,
				LEVEL_MONITOR_UUID,
				LEVEL_MONITOR_CHARACTERISTIC,
				onLevelMonitor
			);
		} else {
			console.log("No device connected");
		}
	};
	return {
		// allDevicesDevices,
		scanDevices,
		allDevices,
		requestPermission,
		disconnectDevice,
		connectToDevice,
		connectedDevice,
	};
};

export default useBleManager;
