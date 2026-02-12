import { NavContainer } from "./navigators/NavContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StatusBar } from "expo-status-bar";
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from "react-native-paper";
import { colors } from "./contants/theme";
import Toast from "react-native-toast-message";

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
			<Provider store={store}>
				<StatusBar style="auto" />
				<NavContainer />
				<Toast />
			</Provider>
		</PaperProvider>
	);
}
