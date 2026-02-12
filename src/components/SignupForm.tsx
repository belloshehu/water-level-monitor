import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { InputField } from "./InputField";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";

export const SignupForm = ({ navigation, onAuthenticate }) => {
	return (
		<View style={styles.container}>
			<Formik
				initialValues={{
					email: "",
					password: "",
					passwordRepeat: "",
				}}
				validationSchema={yup.object().shape({
					email: yup
						.string()
						.email("Please enter valid email")
						.required("Email is required"),
					password: yup
						.string()
						.min(8, ({ min }) => `Password must be atleast ${min} characters`)
						.required("Password is required")
						.matches(/[a-z]+/, "Must contain atleast one lowercase character")
						.matches(/\d+/, "Must contain atleast one number"),
					passwordRepeat: yup
						.string()
						.min(
							8,
							({ min }) => `Password Repeat must be atleast ${min} characters`
						)
						.required("Password Repeat is required")
						.matches(/[a-z]+/, "Must contain atleast one lowercase character")
						.matches(/\d+/, "Must contain atleast one number"),
				})}
				onSubmit={async (values) => {
					await onAuthenticate(values.email, values.password);
				}}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					values,
					errors,
					isValid,
					touched,
				}) => (
					<View style={styles.formWrapper}>
						<InputField
							name={"email"}
							placeholder={"Email Address"}
							type={"email-address"}
							label={"Email"}
							changeHandler={handleChange}
							blurHandler={handleBlur}
							value={values.email}
							withIcon
							icon={<FontAwesome name={"envelope"} size={24} color="#bbb" />}
						/>

						<InputField
							errors={errors}
							values={values}
							touched={touched}
							name={"password"}
							placeholder={"Password"}
							secured={true}
							label={"Password"}
							changeHandler={handleChange}
							blurHandler={handleBlur}
							value={values.password}
							withIcon
							icon={<FontAwesome name={"lock"} size={24} color="#bbb" />}
						/>

						<InputField
							errors={errors}
							values={values}
							touched={touched}
							name={"passwordRepeat"}
							placeholder={"Repeat Password"}
							secured={true}
							label={"Repeat password"}
							changeHandler={handleChange}
							blurHandler={handleBlur}
							value={values.passwordRepeat}
							withIcon
							icon={<FontAwesome name={"lock"} size={24} color="#bbb" />}
						/>

						<View style={styles.buttonWrapper}>
							<Button
								mode="contained"
								onPress={() => handleSubmit()}
								loading={isSubmitting}
							>
								Submit
							</Button>
							<Button
								mode="elevated"
								onPress={() => navigation.navigate("Login")}
							>
								Login up Instead
							</Button>
						</View>
					</View>
				)}
			</Formik>
		</View>
	);
};

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
