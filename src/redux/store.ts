import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import levelReducer from "./features/level/levelSlice";
import { bleMiddleware } from "./features/ble/listener";
import bleReducer from "@/redux/features/ble/bleSlice";

const appReducer = combineReducers({
	ble: bleReducer,
	auth: authReducer,
	level: levelReducer,
});
export const store = configureStore({
	reducer: appReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(bleMiddleware.middleware);
	},
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
