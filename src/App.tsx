// import "react-native-reanimated";
// import "react-native-gesture-handler";
import { CustomBottomSheetProvider } from "./context/BottomSheetContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomBottomSheetHost from "./components/CustomBottomSheetHost";
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

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "",
		secondary: colors.secondary,
		tertiary: colors.tertiary,
	},
	roundness: 40,
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<GestureHandlerRootView>
				<Provider store={store}>
					<CustomBottomSheetProvider>
						<StatusBar style="auto" />
						<NavContainer />
						<Toast />
						<CustomBottomSheetHost />
					</CustomBottomSheetProvider>
				</Provider>
			</GestureHandlerRootView>
		</PaperProvider>
	);
}
