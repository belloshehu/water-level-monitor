import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import configReducer from "./features/config/configSlice";
import { bleMiddleware } from "./features/ble/listener";
import bleReducer from "@/redux/features/ble/bleSlice";
import { persistStore, persistReducer } from "redux-persist";

const appReducer = combineReducers({
	ble: bleReducer,
	auth: authReducer,
	config: configReducer,
});

const persistConfig = {
	key: "root",
	storage: AsyncStorage, // Using AsyncStorage for React Native
	whitelist: ["auth", "config", "ble"], // Only persist the auth reducer
};
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(bleMiddleware.middleware);
	},
});

// export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
