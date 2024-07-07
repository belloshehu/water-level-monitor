import { StyleSheet, Text, View } from "react-native";
import useBleManager from "../hooks/useBleManager";
import { DevicesList } from "../components/DevicesList";
import { useEffect } from "react";

export const DevicesScreen = ({ navigation }) => {
  const {
    requestPermission,
    scanDevices,
    connectToDevice,
    allDevices,
    disconnectDevice,
    connectedDevice,
  } = useBleManager();

  const scanForDevices = async () => {
    const isPermissionEnabled = await requestPermission();
    if (isPermissionEnabled) {
      scanDevices();
    }
  };

  useEffect(() => {
    (async () => {
      await scanDevices();
    })();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        {connectedDevice ? (
          <Text>Please connect to a level monitor</Text>
        ) : (
          <View>{level}</View>
        )}
      </View>
      <View>
        <DevicesList
          connectHandler={connectToDevice}
          disconnectHandler={disconnectDevice}
          devices={allDevices}
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
    backgroundColor: "#ffa500",
    color: "white",
  },
});
