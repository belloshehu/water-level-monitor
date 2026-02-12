import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "@/hooks/redux";
import TabNavigator from "@/navigators/tab-navigator";
import StackNavigator from "@/navigators/tab-navigator";

export const NavContainer = () => {
	const { isAuthenticated } = useAppSelector((store) => store.auth);

	// use stack navigation when not authenticated
	return (
		<NavigationContainer>
			{isAuthenticated ? <TabNavigator /> : <StackNavigator />}
		</NavigationContainer>
	);
};
