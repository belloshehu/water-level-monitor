import { Text, View, StyleSheet, Alert } from "react-native";
import { OnboardingScreenWrapper } from "../components/OnboardingScreenWrapper";
import { AuthScreenHeading } from "../components/AuthScreenHeading";
import { SignupForm } from "../components/SignupForm";
import { createUser, errorMessage } from "../utils/auth";
import { useState } from "react";
import { LadingOverlay } from "../components/LoadingOverlay";

export const SignupScreen = ({ navigation }) => {
	const [isAuthenticating, setIsAuthenticating] = useState(false);
	const signupHandler = async (email, password) => {
		setIsAuthenticating(true);
		try {
			const response = await createUser(email, password);
			navigation.navigate("Login");
		} catch (error) {
			Alert.alert("Signup failed!", errorMessage(error));
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingTop: 10,
		backgroundColor: "rgba(255, 165, 0, 0.5)",
	},
});
