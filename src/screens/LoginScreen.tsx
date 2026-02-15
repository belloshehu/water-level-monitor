import { OnboardingScreenWrapper } from "../components/OnboardingScreenWrapper";
import { AuthScreenHeading } from "../components/AuthScreenHeading";
import { setAuthenticated } from "../redux/features/auth/authSlice";
import { LadingOverlay } from "../components/LoadingOverlay";
import { errorMessage, logInUser } from "../utils/auth";
import { LoginForm } from "../components/LoginForm";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/redux";

const LoginScreen = ({ navigation }) => {
	const dispatch = useAppDispatch();
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	const loginHandler = async (email: string, password: string) => {
		setIsAuthenticating(true);
		try {
			const authToken = await logInUser(email, password);
			dispatch(setAuthenticated(authToken));
		} catch (error) {
			Toast.show({
				type: "error",
				text1: "Signup failed!",
				text2: errorMessage(error),
			});
			// dispatch(clearAuthenticated());
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

export default LoginScreen;
