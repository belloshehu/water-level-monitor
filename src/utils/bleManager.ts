import base64 from "react-native-base64";
import {
	BleError,
	BleManager,
	Characteristic,
	Device,
} from "react-native-ble-plx";
import { parseLevelAndStatusPayload } from "./parsing";

export interface DeviceReference {
	name?: string | null;
	id?: string;
}

const LEVEL_SERVICE = "96e4d99a-066f-444c-b67c-112345e3b1a2";
const LEVEL_CHARACTERISTIC_READ = "19b10001-e8f2-537e-4f6c-d104768b1819";
const LEVEL_SETPOINT_CHARACTERISTIC_WRITE =
	"7c0209c0-93f0-437a-828a-a58379b23000";
const PURITY_CHARACTERISTIC_READ = "7c0209c0-93f0-437a-828a-a58379b2304c";
const PUMP_STATUS_CHARACTERISTIC_READ = "7c0209c0-93f0-437a-828a-a58379b23111";

class BluetoothLeManager {
	bleManager: BleManager;
	device: Device | null;
	isListening = false;

	constructor() {
		this.bleManager = new BleManager();
		this.device = null;
	}

	scanForPeripherals = (
		onDeviceFound: (deviceSummary: DeviceReference) => void
	) => {
		this.bleManager.startDeviceScan(null, null, (_, scannedDevice) => {
			onDeviceFound({
				id: scannedDevice?.id,
				name: scannedDevice?.localName ?? scannedDevice?.name,
			});
		});
	};

	stopScanningForPeripherals = () => {
		this.bleManager.stopDeviceScan();
	};

	connectToPeripheral = async (identifier: string) => {
		this.device = await this.bleManager.connectToDevice(identifier);
		await this.device?.discoverAllServicesAndCharacteristics();

		const isConnected = await this.device.isConnected();

		if (!isConnected) {
			throw new Error("Device failed to stay connected");
		}
		console.log("Device connected successfully");
	};

	disconnectFromPeripheral = async (identifier: string) => {
		this.device = await this.bleManager.cancelDeviceConnection(identifier);
	};

	// readLevel = async () => {
	// 	try {
	// 		const rawLevel = await this.bleManager.readCharacteristicForDevice(
	// 			this.device?.id ?? "",
	// 			LEVEL_SERVICE,
	// 			LEVEL_CHARACTERISTIC_READ
	// 		);
	// 		return base64.decode(rawLevel.value!);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	readPurity = async () => {
		try {
			const rawPurity = await this.bleManager.readCharacteristicForDevice(
				this.device?.id ?? "",
				LEVEL_SERVICE,
				PURITY_CHARACTERISTIC_READ
			);
			return base64.decode(rawPurity.value!);
		} catch (e) {
			console.log(e);
		}
	};

	// Send upper and lower setpoint
	sendSetpoints = async (color: string) => {
		const data = base64.encode(color);
		try {
			await this.bleManager.writeCharacteristicWithResponseForDevice(
				this.device?.id,
				LEVEL_SERVICE,
				LEVEL_SETPOINT_CHARACTERISTIC_WRITE,
				data
			);
		} catch (e) {
			console.log(e);
		}
	};

	onLevelUpdate = (
		error: BleError | null,
		charactaristic: Characteristic | null,
		emitter: (bleValue: { payload: string | BleError }) => void
	) => {
		if (error) {
			console.log("ERROR", error);
			emitter({ payload: "0" });
		}

		if (!charactaristic?.value) return;
		const levelAndStatus = base64.decode(charactaristic?.value!);
		// console.log("payload here:", levelAndStatus);
		// const { level, status } = parseLevelAndStatusPayload(levelAndStatus);
		emitter({ payload: levelAndStatus });
	};

	startStreamingData = async (
		emitter: (bleValue: { payload: string | BleError }) => void
	) => {
		if (!this.device) {
			console.log("Device not connected", this.device);
			return;
		}

		if (!this.isListening) {
			this.isListening = true;
			console.log("this device: ", this.device.id);
			this.device.monitorCharacteristicForService(
				LEVEL_SERVICE,
				LEVEL_CHARACTERISTIC_READ,
				(error, characteristic) => {
					this.onLevelUpdate(error, characteristic, emitter);
				}
			);
		}
	};
}

const manager = new BluetoothLeManager();

export default manager;
