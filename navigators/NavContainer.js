import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./stack-navigator";
import { UseSelector, useSelector } from "react-redux";
import { TabNavigator } from "./tab-navigator";

export const NavContainer = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);
  // use stack navigation when not authenticated
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
};
