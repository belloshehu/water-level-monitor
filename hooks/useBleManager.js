import { useMemo, useState } from "react";
import { Alert, PermissionsAndroid, Platform } from "react-native";
import { BleManager } from "react-native-ble-plx";
import base64 from "react-native-quick-base64";
import { useDispatch } from "react-redux";
import { setLevel } from "../redux/features/level/levelSlice";

const useBleManager = () => {
  const dispatch = useDispatch();
  const bleManager = useMemo(() => new BleManager(), []);
  const [allDevices, setAllDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState([]);

  const connectToDevice = async (device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device);
      setConnectedDevice(deviceConnection);
      await deviceConnection.discoverAllServicesAndCharacteristics();
      bleManager.stopDeviceScan();
      startStreamingData(deviceConnection);
    } catch (error) {
      Alert.alert(`Failed to connect with ${device.name}`, error);
    }
  };

  const disconnectDevice = () => {
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
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        Alert.alert("Scanning error");
      }
      if (device && device.name.includes("levelMonitor")) {
        setAllDevices((previosDevices) => {
          if (!isDuplicate(previosDevices, device)) {
            return [...previousDevices, nextDevice];
          }
          return previosDevices;
        });
      }
    });
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
  // on Android, location permission alone is required if version of Android is 31 and above
  // else, three permissions are required: FINE_LOCATION, CONNECT, SCAN
  // on IOS, the permissions are not required

  const requestPermission = async () => {
    if (Platform.OS === "android") {
      if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location permission",
            message: "Bluetooth requires location",
            buttonPositive: "ok",
          }
        );
        return granted;
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
  };

  const startStreamingData = async (device) => {
    if (device) {
      device.monitorCharateristicForService(
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
