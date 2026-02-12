export const tanks = [
	{
		id: "xl",
		label: "Extra large",
		value: {
			height: 300,
			diameter: 150,
			unit: "cm",
		},
	},
	{
		id: "l",
		label: "Large",
		value: {
			height: 250,
			diameter: 120,
			unit: "cm",
		},
	},
	{
		id: "m",
		label: "Medium",
		value: {
			height: 200,
			diameter: 100,
			unit: "cm",
		},
	},
	{
		id: "s",
		label: "Small",
		value: {
			height: 180,
			diameter: 100,
			unit: "cm",
		},
	},
];

export const cleaningIntervals = [
	{
		id: 1,
		label: "1 month",
		value: {
			month: 1,
			days: 30,
			unit: "Month",
		},
	},

	{
		id: 2,
		label: "2 months",
		value: {
			month: 1,
			days: 60,
			unit: "Months",
		},
	},
	{
		id: 3,
		label: "3 months",
		value: {
			month: 3,
			days: 90,
			unit: "Month",
		},
	},
	{
		id: 4,
		label: "4 months",
		value: {
			month: 4,
			days: 120,
			unit: "Month",
		},
	},
];

export const pumpingMachines = [
	{
		id: "2hp",
		label: "2 horse power",
		value: {
			horsePower: 2,
			flowRate: 35,
		},
	},
	{
		id: "l.5hp",
		label: "1.5 horse power",
		value: {
			horsePower: 1.5,
			flowRate: 25,
		},
	},
	{
		id: "1hp",
		label: "1.0 horse power",
		value: {
			horsePower: 1,
			flowRate: 10,
		},
	},
	{
		id: "0.5hp",
		label: "0.5 horse power",
		value: {
			horsePower: 0.5,
			flowRate: 5,
		},
	},
];
