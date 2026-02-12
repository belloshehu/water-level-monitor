import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

/* render list of bluetooth devices */
interface DeviceProps {
	peripheral: any;
	connect: (peripheral: any) => void;
	disconnect: () => void;
}

export const Device = ({ peripheral, connect, disconnect }: DeviceProps) => {
	const connected = false;
	if (!peripheral) return;
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginBottom: 10,
				width: "100%",
				borderColor: "#ffa500",
				borderWidth: 0,
				elevation: 0.3,
				shadowOffset: { height: 0.2, width: 0.3 },
				shadowColor: "#ffa500",
				shadowRadius: 0.2,
				borderRadius: 10,
				marginHorizontal: 20,
				padding: 20,
			}}
		>
			<Text style={styles.deviceName}>{peripheral.localName}</Text>

			<TouchableOpacity
				onPress={() => (connected ? disconnect() : connect(peripheral))}
				style={styles.deviceButton}
			>
				<Text style={{ textAlign: "center", color: "white" }}>
					{connected ? "Disconnect" : "Connect"}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	deviceInfo: {},
	deviceName: {
		color: "#ffa500",
		flex: 1,
	},
	deviceButton: {
		backgroundColor: "#ffa500",
		padding: 10,
		borderRadius: 10,
		color: "#ffffff",
		flex: 0.5,
		textAlign: "center",
	},
});
