import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import WelcomeScreen from "@/screens/welcome/WelcomeScreen";
import SignupScreen from "@/screens/SignupScreen";
import LoginScreen from "@/screens/LoginScreen";
import TankScreen from "@/screens/TankScreen";
import DevicesScreen from "@/screens/DevicesScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Devices"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Devices" component={DevicesScreen} />
			<Stack.Screen name="Tank" component={TankScreen} />
			<Stack.Screen name="Welcome" component={WelcomeScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignupScreen} />
			<Stack.Screen name="forgot-password" component={ForgotPasswordScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
