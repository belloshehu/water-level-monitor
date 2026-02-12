import { IUser } from "@/types/users.types";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	user: IUser | null;
	isAuthenticated: boolean;
	token: string;
}

const authState: AuthState = {
	user: null,
	isAuthenticated: false,
	token: "",
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
			state.isAuthenticated = false;
			state.token = "";
		},
		setUser: (state: AuthState, { payload }: { payload: IUser }) => {
			state.user = payload;
		},
	},
});

export const { setAuthenticated, clearAuthenticated, setUser } =
	authSlice.actions;

export default authSlice.reducer;
