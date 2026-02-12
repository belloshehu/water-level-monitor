import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import levelReducer from "./features/level/levelSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		level: levelReducer,
	},
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
