import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "@/navigators/stack-navigator";
import TabNavigator from "@/navigators/tab-navigator";
import { useAppSelector } from "@/hooks/redux";

export const NavContainer = () => {
	const { isAuthenticated, token, user } = useAppSelector(
		(store) => store.auth
	);
	// use stack navigation when not authenticated
	return (
		<NavigationContainer>
			{isAuthenticated && token ? <TabNavigator /> : <StackNavigator />}
		</NavigationContainer>
	);
};
