import { createSlice } from "@reduxjs/toolkit";

interface LevelState {
	level: number;
}

const levelState: LevelState = {
	level: 0,
};

const levelSlice = createSlice({
	name: "level",
	initialState: levelState,
	reducers: {
		setLevel: (state: LevelState, { payload }: { payload: number }) => {
			state.level = payload;
		},
		clearLevel: (state: LevelState) => {
			state.level = 0;
		},
	},
});

export const { setLevel, clearLevel } = levelSlice.actions;
export default levelSlice.reducer;
