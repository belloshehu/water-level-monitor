import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { FontAwesome } from "@expo/vector-icons";
import { FormError } from "../FormError";
import { CustomButton } from "../CustomButton";
import { InputField } from "../InputField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ProfileForm({ navigation, onUpdateProfile, user }) {
	const { email, firstName, lastName } = user;
	const blurHandler = (name, handleBlur) => {
		handleBlur(name);
		setBgColor("rgba(217, 217, 217, 0.4)");
		setZindex(1);
	};
	const focusHandler = () => {
		setBgColor("#FFA500");
		setZindex(3);
	};
	const handleForgotPassword = () => {
		navigation.navigate("forgot-password");
	};
	return (
		<KeyboardAwareScrollView
			style={{
				flex: 1,
				position: "relative",
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
					}) => (
						<View style={styles.formWrapper}>
							<InputField
								errors={errors}
								name={"email"}
								placeholder={"Email Address"}
								type={"email-address"}
								changeHandler={handleChange}
								blurHandler={handleBlur}
								value={values.email}
								touched={touched}
								editable={false}
								withIcon
								icon={<FontAwesome name={"envelope"} size={24} color="#bbb" />}
							/>
							<InputField
								errors={errors}
								name={"firstName"}
								placeholder={"First name"}
								type={"firstName"}
								changeHandler={handleChange}
								blurHandler={handleBlur}
								value={values.firstName}
								touched={touched}
								withIcon
								icon={<FontAwesome name={"user"} size={24} color="#bbb" />}
							/>
							<InputField
								errors={errors}
								name={"lastName"}
								placeholder={"Last name"}
								type={"lastName"}
								changeHandler={handleChange}
								blurHandler={handleBlur}
								value={values.lastName}
								touched={touched}
								withIcon
								icon={<FontAwesome name={"user"} size={24} color="#bbb" />}
							/>

							<View style={styles.buttonWrapper}>
								<CustomButton
									buttonText={"Save"}
									pressHandler={handleSubmit}
									disabled={touched.firstName || touched.lastName}
									bgColor={"#ffa500"}
								/>
							</View>
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
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
	input: {
		fontSize: 16,
		height: 40,
		borderWidth: 0,
		textAlignVertical: "center",
		width: "90%",
		color: "black",
	},
	inputWrapper: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 0,
		backgroundColor: "#fff",
		columnGap: 5,
		flexDirection: "row",
		borderRadius: 10,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	formWrapper: {
		justifyContent: "center",
		alignItems: "center",
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
	buttonWrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		width: "100%",
		gap: 20,
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
