import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import useToggle from "@/hooks/useToggle";
import { InputField } from "./InputField";
import { Formik } from "formik";
import * as yup from "yup";

export const LoginForm = ({ navigation, onAuthenticate }) => {
	const [visible, toggleState] = useToggle();
	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ email: "", password: "" }}
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
				})}
				onSubmit={async (values) => {
					await onAuthenticate(values.email, values.password);
				}}
			>
				{({ handleSubmit, values, handleChange, isSubmitting }) => (
					<View style={styles.formWrapper}>
						<InputField
							name={"email"}
							placeholder={"Email Address"}
							keyboardType={"email-address"}
							label={"Email"}
							onChangeText={handleChange("email")}
							value={values.email}
							icon={"envelope"}
						/>
						<InputField
							name={"password"}
							placeholder={"Password"}
							keyboardType="default"
							secureTextEntry={visible ? false : true}
							label={"Password"}
							onChangeText={handleChange("password")}
							value={values.password}
							icon={"lock"}
							right={true}
							onPressRightIcon={toggleState as () => void}
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
								onPress={() => navigation.navigate("Signup")}
							>
								Sign up Instead
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
	},
	buttonWrapper: {
		justifyContent: "center",
		marginTop: 20,
		width: "100%",
		gap: 20,
	},
	text: {
		color: "white",
		textAlign: "center",
		fontSize: 18,
	},
});
