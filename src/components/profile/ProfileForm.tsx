import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, StyleSheet } from "react-native";
import { Button, IconButton, Text } from "react-native-paper";
import { InputField } from "../InputField";
import { Formik } from "formik";
import * as yup from "yup";
import { User, updateProfile, getAuth } from "firebase/auth";
import { getFirstAndLastNames } from "@/utils/user";
import { ISerializedUser } from "@/types/users.types";
import verifyEmail from "@/auth/email-verification";

interface ProfileFormProps {
	user: ISerializedUser;
}
interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
}
export default function ProfileForm({ user }: ProfileFormProps) {
	const { email } = user;
	const { firstName, lastName } = getFirstAndLastNames(user.displayName);
	const auth = getAuth();
	const handleProfileUpdate = async (displayName: string) => {
		updateProfile(auth.currentUser, {
			displayName,
		});
	};

	return (
		<KeyboardAwareScrollView
			style={{
				flex: 1,
				position: "relative",
				backgroundColor: "#fff",
				borderRadius: 20,
			}}
			contentContainerStyle={{
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
				flex: 1,
				paddingTop: 10,
			}}
		>
			<Button
				mode="elevated"
				icon={user.emailVerified ? "check" : "email"}
				onPress={verifyEmail}
				disabled={user.emailVerified}
			>
				{user.emailVerified ? "Email verified" : "Verify email"}
			</Button>
			<View style={styles.container}>
				<Formik
					initialValues={{ email, firstName, lastName }}
					validationSchema={yup.object().shape({
						email: yup
							.string()
							.email("Please enter valid email")
							.required("Email is required"),
						firstName: yup
							.string()
							.min(
								2,
								({ min }) => `First name must be atleast ${min} characters`
							)
							.required("First name is required"),
						lastName: yup
							.string()
							.min(
								2,
								({ min }) => `Last name must be atleast ${min} characters`
							)
							.required("Last name is required"),
					})}
					onSubmit={async (values: FormValues) => {
						const displayName = values.firstName + " " + values.lastName;
						handleProfileUpdate(displayName);
					}}
				>
					{({ handleSubmit, values, handleChange, dirty, isSubmitting }) => (
						<View style={styles.formWrapper}>
							<InputField
								name={"email"}
								placeholder={"Email Address"}
								keyboardType={"email-address"}
								onChangeText={handleChange("email")}
								value={values.email}
								editable={false}
							/>
							<InputField
								name={"firstName"}
								placeholder={"First name"}
								onChangeText={handleChange("firstName")}
								value={values.firstName}
								label={"First name"}
							/>
							<InputField
								name={"lastName"}
								placeholder={"Last name"}
								onChangeText={handleChange("lastName")}
								value={values.lastName}
								label={"Last name"}
							/>

							<Button
								mode="contained"
								onPress={() => handleSubmit()}
								disabled={!dirty}
								loading={isSubmitting}
							>
								Save
							</Button>
						</View>
					)}
				</Formik>
			</View>
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(255, 165, 0, 0)",
		borderRadius: 50,
		borderBottomLeftRadius: 50,
		borderTopRightRadius: 50,
		padding: 20,
		paddingVertical: 50,
		justifyContent: "center",
		width: "100%",
	},
	formWrapper: {
		justifyContent: "center",
		// alignItems: "center",
		gap: 15,
		width: "100%",
		flex: 1,
		height: "100%",
	},
	label: {
		color: "#fff",
	},
	errorText: {
		fontSize: 12,
		color: "red",
	},

	text: {
		color: "white",
		textAlign: "center",
		fontSize: 18,
	},
	link: {
		fontWeight: "bold",
		textDecorationLine: "underline",
		textAlign: "center",
		color: "white",
		fontSize: 18,
	},
});
