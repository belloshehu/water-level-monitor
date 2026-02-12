import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/welcome/WelcomeScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPasswordScreen";
import { SignupScreen } from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Welcome"
			screenOptions={{
				header: () => {}, // remove the navigator header
			}}
		>
			<Stack.Screen name="Welcome" component={WelcomeScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
			<Stack.Screen name="forgot-password" component={ForgotPasswordScreen} />
		</Stack.Navigator>
	);
};
