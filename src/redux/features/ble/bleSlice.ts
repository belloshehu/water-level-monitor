import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { DeviceReference } from "@/utils/bleManager";
import { parseLevelAndStatusPayload } from "@/utils/parsing";

interface BluetoothState {
	allDevices: DeviceReference[];
	currentLevel: string;
	connectedDevice: DeviceReference | null;
	retrievedLevel?: string;
	retrievedPurity?: string;
	retrievedPumpStatus: string;
}

const initialState: BluetoothState = {
	allDevices: [],
	currentLevel: "0",
	connectedDevice: null,
	retrievedLevel: "0",
	retrievedPurity: "0",
	retrievedPumpStatus: "0",
};

const isDuplicteDevice = (
	devices: DeviceReference[],
	nextDevice: DeviceReference
) => devices.findIndex((device) => nextDevice.id === device.id) > -1;

export type DevicesAction = PayloadAction<DeviceReference>;

export const startScanning = createAction("bleState/startScanning");
export const startListening = createAction("bleState/startListening");

const bleState = createSlice({
	name: "bleState",
	initialState,
	reducers: {
		setDevice: (state, action: DevicesAction) => {
			if (!isDuplicteDevice(state.allDevices, action.payload)) {
				state.allDevices = [...state.allDevices, action.payload];
			}
		},
		setConnectedDevice: (state, action: PayloadAction<DeviceReference>) => {
			state.connectedDevice = action.payload;
		},

		clearConnectedtDevice: (state) => {
			state.connectedDevice = null;
		},
		setRetrievedLevel: (
			state,
			action: PayloadAction<string | null | undefined>
		) => {
			state.retrievedLevel = action.payload;
		},
		setRetrievedPumpStatus: (
			state,
			action: PayloadAction<string | null | undefined>
		) => {
			state.retrievedPumpStatus = action.payload;
		},
		setRetrievedStatusAndLevel: (
			state,
			action: PayloadAction<string | null | undefined>
		) => {
			const { level, status = "0" } = parseLevelAndStatusPayload(
				action.payload
			);
			state.retrievedPumpStatus = status;
			state.retrievedLevel = level;
		},
		setRetrievedPurity: (
			state,
			action: PayloadAction<string | null | undefined>
		) => {
			state.retrievedPurity = action.payload || "0";
		},
	},
});

export const {
	setDevice,
	setConnectedDevice,
	setRetrievedLevel,
	setRetrievedPurity,
	clearConnectedtDevice,
	setRetrievedPumpStatus,
	setRetrievedStatusAndLevel,
} = bleState.actions;

export default bleState.reducer;
