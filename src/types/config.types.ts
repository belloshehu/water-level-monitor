export type TankConfig = {
	height: number;
	diameter: number;
};

export type SetPointsConfig = {
	onSetPoint: number;
	offSetPoint: number;
};

export type PumpingMachineConfig = {
	horsePower: number;
	flowRate: number;
};

export type CleaningSchedule = {
	startDate: string;
	interval: number; // number of days: 30, 60, 90
	previousDate?: Date | null; // date for the previous cleaning
};
