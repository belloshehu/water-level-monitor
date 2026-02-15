import { OnboardingScreenWrapper } from "../components/OnboardingScreenWrapper";
import { AuthScreenHeading } from "../components/AuthScreenHeading";
import { LadingOverlay } from "../components/LoadingOverlay";
import { createUser, errorMessage } from "../utils/auth";
import { SignupForm } from "../components/SignupForm";
import Toast from "react-native-toast-message";
import { useState } from "react";

const SignupScreen = ({ navigation }) => {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const signupHandler = async (email: string, password: string) => {
		setIsAuthenticating(true);
		try {
			const response = await createUser(email, password);
			navigation.navigate("Login");
		} catch (error) {
			Toast.show({
				type: "error",
				text1: "Signup failed!",
				text2: errorMessage(error),
			});
		} finally {
			setIsAuthenticating(false);
		}
	};

	if (isAuthenticating) {
		return <LadingOverlay message={"Creating user..."} />;
	}

	return (
		<OnboardingScreenWrapper padding={10}>
			<AuthScreenHeading text={"Sign up"} />
			<SignupForm navigation={navigation} onAuthenticate={signupHandler} />
		</OnboardingScreenWrapper>
	);
};

export default SignupScreen;
