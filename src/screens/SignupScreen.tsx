import { OnboardingScreenWrapper } from "../components/OnboardingScreenWrapper";
import { AuthScreenHeading } from "../components/AuthScreenHeading";
import { SignupForm } from "../components/SignupForm";
import signup from "@/auth/signup-with-credentials";
import { useState } from "react";

const SignupScreen = ({ navigation }) => {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const signupHandler = async (email: string, password: string) => {
		setIsAuthenticating(true);
		await signup(email, password);
		setIsAuthenticating(false);
	};

	return (
		<OnboardingScreenWrapper padding={10}>
			<AuthScreenHeading text={"Sign up"} />
			<SignupForm
				navigation={navigation}
				onAuthenticate={signupHandler}
				isPending={isAuthenticating}
			/>
		</OnboardingScreenWrapper>
	);
};

export default SignupScreen;
