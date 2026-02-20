import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { InputField } from "./InputField";
import useToggle from "@/hooks/useToggle";
import { Formik } from "formik";
import * as yup from "yup";
import useInputFocus from "@/hooks/useInputFocus";

interface FormValues {
	email: string;
	password: string;
	passwordRepeat: string;
}

export const SignupForm = ({ navigation, onAuthenticate, isPending }) => {
	const [visiblePassword, toggleStatePassword] = useToggle();
	const [visiblePasswordRepeat, toggleStatePasswordRepeat] = useToggle();
	const [passwordRef, focusPassword] = useInputFocus();
	const [passwordRepeatRef, focusPasswordRepeat] = useInputFocus();

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
				onSubmit={async (values: FormValues) => {
					console.log(isPending);
					await onAuthenticate(values.email, values.password);
				}}
			>
				{({ handleChange, handleSubmit, values }) => (
					<View style={styles.formWrapper}>
						<InputField
							name={"email"}
							placeholder={"Email Address"}
							keyboardType={"email-address"}
							label={"Email"}
							onChangeText={handleChange("email")}
							value={values.email}
							icon={"envelope"}
							onSubmitEditing={focusPassword}
							returnKeyType="next"
						/>

						<InputField
							name={"password"}
							placeholder={"Password"}
							secureTextEntry={visiblePassword ? false : true}
							label={"Password"}
							onChangeText={handleChange("password")}
							value={values.password}
							icon={"lock"}
							right
							onPressRightIcon={toggleStatePassword as () => void}
							onSubmitEditing={focusPasswordRepeat}
							returnKeyType="next"
							ref={passwordRef}
						/>

						<InputField
							name={"passwordRepeat"}
							placeholder={"Repeat Password"}
							secureTextEntry={visiblePasswordRepeat ? false : true}
							label={"Repeat Password"}
							onChangeText={handleChange("passwordRepeat")}
							value={values.passwordRepeat}
							icon={"lock"}
							onPressRightIcon={toggleStatePasswordRepeat as () => void}
							onSubmitEditing={() => handleSubmit()}
							returnKeyType="done"
							ref={passwordRepeatRef}
						/>

						<View style={styles.buttonWrapper}>
							<Button
								mode="contained"
								onPress={() => handleSubmit()}
								loading={isPending}
							>
								Submit
							</Button>
							<Button
								mode="elevated"
								onPress={() => navigation.navigate("Login")}
							>
								Login Instead
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
		justifyContent: "center",
		width: "100%",
	},
	formWrapper: {
		justifyContent: "center",
		gap: 15,
		width: "100%",
		flex: 1,
		height: "100%",
	},
	buttonWrapper: {
		justifyContent: "center",
		marginTop: 20,
		width: "100%",
		gap: 20,
	},
});
