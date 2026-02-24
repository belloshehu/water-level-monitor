import { setAuthenticated } from "@/redux/features/auth/authSlice";
import { NavigationContainer } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import StackNavigator from "@/navigators/stack-navigator";
import TabNavigator from "@/navigators/tab-navigator";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useEffect } from "react";

export const NavContainer = () => {
	const { user } = useAppSelector((store) => store.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			//console.log(user);
			const serializedUser = {
				uid: user.uid,
				displayName: user.displayName,
				email: user.email,
				emailVerified: user.emailVerified,
				phoneNumber: user.phoneNumber,
				photoURL: user.photoURL,
			};
			dispatch(setAuthenticated(serializedUser));
		});
	}, []);

	// use stack navigation when not authenticated
	return (
		<NavigationContainer>
			{user ? <TabNavigator /> : <StackNavigator />}
		</NavigationContainer>
	);
};
