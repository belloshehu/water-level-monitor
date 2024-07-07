import { Text, View, StyleSheet } from "react-native";
import { LoginForm } from "../components/LoginForm";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
