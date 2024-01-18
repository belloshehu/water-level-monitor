import { View, StyleSheet, Text } from "react-native";
import { OnboardingScreenWrapper } from "../../components/OnboardingScreenWrapper";
import { Button } from "../../components/Button";
import { WelcomeCarousel } from "./WelcomeCarousel";
import { Logo } from "../../components/Logo";

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <WelcomeCarousel />
      <Button
        buttonText={"Get Started"}
        textColor={"#FFA500"}
        bgColor={"black"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFA500",
  },
});
