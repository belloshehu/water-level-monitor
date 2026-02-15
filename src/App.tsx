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
import { store } from "@/redux/store";
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from "react-native-paper";
import { colors } from "./contants/theme";
import { useEffect } from "react";
import { requestPermissions } from "./utils/blePermission";

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
				{/* <CustomBottomSheetProvider> */}
				<StatusBar style="auto" />
				<NavContainer />
				<Toast />
				{/* <CustomBottomSheetHost /> */}
				{/* </CustomBottomSheetProvider> */}
			</Provider>
			{/* </GestureHandlerRootView> */}
		</PaperProvider>
	);
}
