import {
	CleaningSchedule,
	PumpingMachineConfig,
	SetPointsConfig,
	TankConfig,
} from "@/types/config.types";
import { createSlice } from "@reduxjs/toolkit";

interface ConfigState {
	tank: TankConfig | null;
	setPoints: SetPointsConfig | null;
	pumpingMachine: PumpingMachineConfig | null;
	cleaningSchedule: CleaningSchedule;
}

const ConfigState: ConfigState = {
	tank: {
		diameter: 100, // 100 cm
		height: 200, // 200 cm
		capacity: 3000, // in litres
	},
	setPoints: {
		offSetPoint: 95, // 95%
		onSetPoint: 30, // 30%
	},
	pumpingMachine: { flowRate: 2, horsePower: 2 },
	cleaningSchedule: {
		interval: 30,
		startDate: new Date().toISOString(),
		previousDate: null,
	},
};

const configSlice = createSlice({
	name: "configuration",
	initialState: ConfigState,
	reducers: {
		setTank: (state: ConfigState, { payload }: { payload: TankConfig }) => {
			state.tank = payload;
		},
		setSetPoints: (
			state: ConfigState,
			{ payload }: { payload: SetPointsConfig }
		) => {
			state.setPoints = payload;
		},
		setPumpingMachine: (
			state: ConfigState,
			{ payload }: { payload: PumpingMachineConfig }
		) => {
			state.pumpingMachine = payload;
		},
		setCleaningSchedule: (
			state: ConfigState,
			{ payload }: { payload: CleaningSchedule }
		) => {
			state.cleaningSchedule = payload;
		},
	},
});

export const { setCleaningSchedule, setPumpingMachine, setSetPoints, setTank } =
	configSlice.actions;
export default configSlice.reducer;
