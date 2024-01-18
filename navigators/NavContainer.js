import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./stack-navigator";

export const NavContainer = () => {
  // use stack navigation when not authenticated
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
