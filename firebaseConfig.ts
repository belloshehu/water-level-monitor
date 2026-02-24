import { FirebaseOptions, initializeApp } from "firebase/app";
//@ts-ignore
import {
	initializeAuth,
	//@ts-ignore
	getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import appConfig from "./app.config";
const {
	FIREBASE_API_KEY,
	FIREBASE_MEASUREMENT_ID,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_PROJECT_AUTH_DOMAIN,
	FIREBASE_PROJECT_DATABASE_URL,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_APP_ID,
} = appConfig.expo.extra;

const firebaseConfig: FirebaseOptions = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_PROJECT_AUTH_DOMAIN,
	databaseURL: FIREBASE_PROJECT_DATABASE_URL,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID,
	measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
