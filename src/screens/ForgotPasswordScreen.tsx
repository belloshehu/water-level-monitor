import { OnboardingScreenWrapper } from "../components/OnboardingScreenWrapper";
import { AuthScreenHeading } from "../components/AuthScreenHeading";
import { CustomButton } from "../components/CustomButton";

export const ForgotPasswordScreen = ({ navigation }) => {
	return (
		<OnboardingScreenWrapper>
			<AuthScreenHeading text={"P-Reset"} />
			<CustomButton
				buttonText={"Login"}
				pressHandler={() => {
					navigation.navigate("Login");
				}}
			/>
		</OnboardingScreenWrapper>
	);
};
