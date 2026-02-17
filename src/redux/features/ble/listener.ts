import { createAsyncThunk, createListenerMiddleware } from "@reduxjs/toolkit";
import bluetoothLeManager, { DeviceReference } from "@/utils/bleManager";
import {
	clearConnectedtDevice,
	setConnectedDevice,
	setDevice,
	setRetrievedLevel,
	setRetrievedPurity,
	setRetrievedStatusAndLevel,
	startListening,
	startScanning,
} from "./bleSlice";
import { CleaningSchedule } from "@/types/config.types";
import { setCleaningSchedule } from "../config/configSlice";

export const bleMiddleware = createListenerMiddleware();

export const connectToDevice = createAsyncThunk(
	"bleThunk/connectToDevice",
	async (ref: DeviceReference, thunkApi) => {
		if (ref.id) {
			await bluetoothLeManager.connectToPeripheral(ref.id);
			thunkApi.dispatch(setConnectedDevice(ref));
			bluetoothLeManager.stopScanningForPeripherals();
			//START STREAMING HERE
			bluetoothLeManager.startStreamingData(({ payload }) => {
				if (typeof payload === "string") {
					thunkApi.dispatch(setRetrievedLevel(payload));
				}
			});
		}
	}
);

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

export const sendTankData = createAsyncThunk(
	"bleThunk/sendTankData",
	async (tank: string, _) => {
		// "height, diameter", Example: "200,100". That is 200 for height and 100 for diameter
		await bluetoothLeManager.sendTank(tank);
	}
);

export const setCleaningScheduleData = createAsyncThunk(
	"bleThunk/setCleaningScheduleData",
	async (cleaningSchedule: CleaningSchedule, thunkApi) => {
		// "height, diameter", Example: "200,100". That is 200 for height and 100 for diameter
		thunkApi.dispatch(setCleaningSchedule(cleaningSchedule));
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
				listenerApi.dispatch(setRetrievedStatusAndLevel(payload));
			}
		});
	},
});
