import { IUser } from "@/types/users.types";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	user: IUser | null;
	isAuthenticated: boolean;
	token: string | null;
}

const authState: AuthState = {
	user: null,
	isAuthenticated: false,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: authState,
	reducers: {
		setAuthenticated: (state: AuthState, { payload }) => {
			state.isAuthenticated = true;
			state.token = payload;
		},
		clearAuthenticated: (state: AuthState) => {
			console.log("logging out...");
			state.isAuthenticated = false;
			state.token = null;
		},
		setUser: (state: AuthState, { payload }: { payload: IUser }) => {
			state.user = payload;
		},
	},
});

export const { setAuthenticated, clearAuthenticated, setUser } =
	authSlice.actions;

export default authSlice.reducer;
