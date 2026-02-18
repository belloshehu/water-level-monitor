// import "react-native-reanimated";
// import "react-native-gesture-handler";
// import { CustomBottomSheetProvider } from "./context/BottomSheetContext";
// import CustomBottomSheetHost from "./components/CustomBottomSheetHost";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavContainer } from "./navigators/NavContainer";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
// import { colors } from "@/contants/theme";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from "react-native-paper";
import { colors } from "./contants/theme";
import { useEffect } from "react";
import { requestPermissions } from "./utils/blePermission";
import { PersistGate } from "redux-persist/integration/react";
import TabNavigator from "./navigators/tab-navigator";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: colors.primary,
		secondary: colors.secondary,
		tertiary: colors.tertiary,
	},
	roundness: 40,
};

export default function App() {
	useEffect(() => {
		requestPermissions();
	}, []);

	return (
		<PaperProvider theme={theme}>
			{/* <GestureHandlerRootView> */}
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{/* <CustomBottomSheetProvider> */}
					<StatusBar style="auto" />
					<NavContainer />
					<Toast />
					{/* <CustomBottomSheetHost /> */}
					{/* </CustomBottomSheetProvider> */}
				</PersistGate>
			</Provider>
			{/* </GestureHandlerRootView> */}
		</PaperProvider>
	);
}
