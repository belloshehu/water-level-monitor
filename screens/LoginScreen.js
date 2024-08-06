import { Alert } from "react-native";
import { LoginForm } from "../components/LoginForm";
import { OnboardingScreenWrapper } from "../components/OnboardingScreenWrapper";
import { AuthScreenHeading } from "../components/AuthScreenHeading";
import { errorMessage, logInUser } from "../utils/auth";
import { useState } from "react";
import { LadingOverlay } from "../components/LoadingOverlay";
import { useDispatch } from "react-redux";
import {
	clearAuthenticated,
	setAuthenticated,
} from "../redux/features/auth/authSlice";

export const LoginScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	const loginHandler = async (email, password) => {
		setIsAuthenticating(true);
		try {
			const authToken = await logInUser(email, password);
			dispatch(setAuthenticated(authToken));
		} catch (error) {
			Alert.alert("Login failed!", errorMessage(error));
			dispatch(clearAuthenticated());
		} finally {
			setIsAuthenticating(false);
		}
	};

	if (isAuthenticating) {
		return <LadingOverlay message={"Logging user..."} />;
	}
	return (
		<OnboardingScreenWrapper padding={10}>
			<AuthScreenHeading text={"Login"} />
			<LoginForm navigation={navigation} onAuthenticate={loginHandler} />
		</OnboardingScreenWrapper>
	);
};
