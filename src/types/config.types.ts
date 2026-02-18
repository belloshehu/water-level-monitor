export type TankConfig = {
	height: number;
	capacity: number; // in liters
};

export type SetPointsConfig = {
	onSetPoint: number;
	offSetPoint: number;
};

export type PumpingMachineConfig = {
	horsePower: number;
	flowRate: number; // in Liters per minute
};

export type CleaningSchedule = {
	startDate: string;
	interval: number; // number of days: 30, 60, 90
	previousDate?: Date | null; // date for the previous cleaning
};
