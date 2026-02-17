import { OnboardingScreenWrapper } from "../components/OnboardingScreenWrapper";
import { AuthScreenHeading } from "../components/AuthScreenHeading";
import { Button } from "react-native-paper";

const ForgotPasswordScreen = ({ navigation }) => {
	return (
		<OnboardingScreenWrapper>
			<AuthScreenHeading text={"P-Reset"} />
			<Button
				onPress={() => {
					navigation.navigate("Login");
				}}
			>
				Login
			</Button>
		</OnboardingScreenWrapper>
	);
};

export default ForgotPasswordScreen;
