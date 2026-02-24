import { OnboardingScreenWrapper } from "../components/OnboardingScreenWrapper";
import { AuthScreenHeading } from "../components/AuthScreenHeading";
import { LoginForm } from "../components/LoginForm";
import Toast from "react-native-toast-message";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/redux";
import login from "@/auth/sign-with-credential";

const LoginScreen = ({ navigation }) => {
	const dispatch = useAppDispatch();
	const [isAuthenticating, setIsAuthenticating] = useState(false);

	const loginHandler = async (email: string, password: string) => {
		setIsAuthenticating(true);
		const re = await login(email, password);
		setIsAuthenticating(false);
	};

	// if (isAuthenticating) {
	// 	return <LadingOverlay message={"Logging user..."} />;
	// }
	return (
		<OnboardingScreenWrapper padding={10}>
			<AuthScreenHeading text={"Login"} />
			<LoginForm
				navigation={navigation}
				onAuthenticate={loginHandler}
				isPending={isAuthenticating}
			/>
		</OnboardingScreenWrapper>
	);
};

export default LoginScreen;
