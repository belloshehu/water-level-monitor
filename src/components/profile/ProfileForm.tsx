import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { InputField } from "../InputField";
import { Formik } from "formik";
import * as yup from "yup";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileForm({ navigation, onUpdateProfile, user }) {
	const { email, firstName, lastName } = user;
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
			}}
		>
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
					onSubmit={async (values) => {
						await onUpdateProfile(
							values.email,
							values.firstName,
							values.lastName
						);
					}}
				>
					{({
						handleSubmit,
						values,
						handleChange,
						handleBlur,
						errors,
						touched,
						dirty,
						isSubmitting,
					}) => (
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
							/>
							<InputField
								name={"lastName"}
								placeholder={"Last name"}
								onChangeText={handleChange("lastName")}
								value={values.firstName}
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
