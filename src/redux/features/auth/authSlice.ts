import { IUser } from "@/types/users.types";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface AuthState {
	user: User | null;
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
		setAuthenticated: (state: AuthState, { payload }: { payload: User }) => {
			state.isAuthenticated = true;
			state.user = payload;
		},
		clearAuthenticated: (state: AuthState) => {
			state.isAuthenticated = false;
			state.token = null;
			state.user = null;
		},
		setUser: (state: AuthState, { payload }: { payload: User }) => {
			state.user = payload;
		},
	},
});

export const { setAuthenticated, clearAuthenticated, setUser } =
	authSlice.actions;

export default authSlice.reducer;
