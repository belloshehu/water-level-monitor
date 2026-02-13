import { clearAuthenticated } from "../redux/features/auth/authSlice";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileForm from "../components/profile/ProfileForm";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";

export const ProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(clearAuthenticated());
		navigation.navigate("Login");
	};

	const updateUserProfile = () => {
		console.log("Updating user...");
	};
	return (
		<View style={styles.container}>
			<ProfileHeader firstName={"Bello"} secondName={"Shehu"} />
			<ProfileForm
				navigation={navigation}
				onUpdateProfile={updateUserProfile}
				user={{
					email: "belloshehu1@gnail.com",
					firstName: "Bello",
					lastName: "Shehu",
				}}
			/>
			<View style={styles.buttonWrapper}>
				<Button onPress={handleLogOut}>Logout</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
		padding: 20,
		backgroundColor: "rgba(255, 165, 0, 0)",
		color: "white",
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
