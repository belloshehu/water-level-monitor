import { createAsyncThunk, createListenerMiddleware } from "@reduxjs/toolkit";
import {
	clearConnectedtDevice,
	setConnectedDevice,
	setDevice,
	setRetrievedLevel,
	setRetrievedPumpStatus,
	setRetrievedPurity,
	setRetrievedStatusAndLevel,
	startListening,
	startScanning,
} from "./bleSlice";

import bluetoothLeManager, { DeviceReference } from "@/utils/bleManager";
import { parseLevelAndStatusPayload } from "@/utils/parsing";

export const bleMiddleware = createListenerMiddleware();

export const connectToDevice = createAsyncThunk(
	"bleThunk/connectToDevice",
	async (ref: DeviceReference, thunkApi) => {
		if (ref.id) {
			await bluetoothLeManager.connectToPeripheral(ref.id);
			thunkApi.dispatch(setConnectedDevice(ref));
			bluetoothLeManager.stopScanningForPeripherals();
			// ✅ START STREAMING HERE
			// bluetoothLeManager.startStreamingData(({ payload }) => {
			// 	if (typeof payload === "string") {
			// 		thunkApi.dispatch(setRetrievedLevel(payload));
			// 	}
			// });
		}
	}
);

// export const disconnectFromDevice = createAsyncThunk(
// 	"bleThunk/disconnectFromToDevice",
// 	async (ref: DeviceReference, thunkApi) => {
// 		if (ref.id) {
// 			await bluetoothLeManager.disconnectFromPeripheral(ref.id);
// 			thunkApi.dispatch(clearConnectedtDevice());
// 		}
// 	}
// );
export const disconnectFromDevice = createAsyncThunk(
	"bleThunk/disconnectFromToDevice",
	async (ref: DeviceReference, thunkApi) => {
		if (ref.id) {
			try {
				await bluetoothLeManager.disconnectFromPeripheral(ref.id);
				thunkApi.dispatch(clearConnectedtDevice());
			} catch (error) {
				console.log("Disconnect error:", error);
				throw error;
			}
		}
	}
);

export const readPurityFromDevice = createAsyncThunk(
	"bleThunk/readPurityFromDevice",
	async (_, thunkApi) => {
		const purity = await bluetoothLeManager.readPurity();
		thunkApi.dispatch(setRetrievedPurity(purity));
	}
);

export const sendSetPointsData = createAsyncThunk(
	"bleThunk/sendSetpointsData",
	async (setPoints: string, _) => {
		// "lower,upper", Example: "30,90". That is 30% for lower and 90% for upper setpoints
		await bluetoothLeManager.sendSetpoints(setPoints);
	}
);

bleMiddleware.startListening({
	actionCreator: startScanning,
	effect: (_, listenerApi) => {
		bluetoothLeManager.scanForPeripherals((device) => {
			if (device.name === "EASEVIEW") {
				listenerApi.dispatch(setDevice(device));
			}
		});
	},
});

bleMiddleware.startListening({
	actionCreator: startListening,
	effect: (_, listenerApi) => {
		bluetoothLeManager.startStreamingData(({ payload }) => {
			console.log("Payload:", payload);
			if (!payload) return;
			if (typeof payload === "string") {
				// const { level, status } = parseLevelAndStatusPayload(payload);
				// listenerApi.dispatch(setRetrievedLevel(level));
				// listenerApi.dispatch(setRetrievedPumpStatus(status));
				listenerApi.dispatch(setRetrievedStatusAndLevel(payload));
			}
		});
	},
});
