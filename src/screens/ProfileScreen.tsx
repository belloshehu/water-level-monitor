import { clearAuthenticated } from "../redux/features/auth/authSlice";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileForm from "../components/profile/ProfileForm";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { getFirstAndLastNames } from "@/utils/user";

const ProfileScreen = ({ navigation }) => {
	const user = useAppSelector((state) => state.auth.user);
	const dispatch = useAppDispatch();

	const handleLogOut = () => {
		signOut(auth);
		dispatch(clearAuthenticated());
	};

	const { firstName, lastName } = getFirstAndLastNames(user.displayName);
	return (
		<View style={styles.container}>
			<ProfileHeader
				firstName={firstName}
				secondName={lastName}
				photo={user.photoURL}
			/>
			<ProfileForm user={user} />
			<View style={styles.buttonWrapper}>
				<Button mode="outlined" onPress={handleLogOut}>
					Logout
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		backgroundColor: "rgba(255, 165, 0, 0)",
		paddingTop: 50,
	},
	buttonWrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 0,
		width: "100%",
		gap: 20,
		padding: 20,
	},
});

export default ProfileScreen;
