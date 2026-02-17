import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, StyleSheet } from "react-native";
import { InputField } from "../../InputField";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPumpingMachine } from "@/redux/features/config/configSlice";

interface FormValues {
	flowRate: number;
	horsePower: number;
}

export const PumpConfigForm = ({ configure }) => {
	const dispatch = useAppDispatch();
	const { pumpingMachine } = useAppSelector((state) => state.config);
	const initialValues = pumpingMachine;
	return (
		<KeyboardAwareScrollView
			style={{ position: "relative" }}
			contentContainerStyle={{
				flex: 1,
				marginVertical: "auto",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<View style={styles.container}>
				<Formik
					initialValues={initialValues}
					validationSchema={yup.object().shape({
						flowRate: yup
							.number()
							.min(1, "Flow rate too small")
							.required("Flow rate is required"),

						horsePower: yup
							.number()
							.min(0.5, "Horse power must be greater than 0.5")
							.required("Horse power rating is required"),
					})}
					onSubmit={async (values) => {
						// await onAuthenticate(values.email, values.password);
						dispatch(setPumpingMachine(values));
						await configure(values);
					}}
				>
					{({
						handleSubmit,
						handleChange,
						isSubmitting,
						dirty,
						isValid,
						values,
					}) => (
						<View style={styles.formWrapper}>
							<View style={styles.fieldset}>
								<Text style={styles.legend}>Pumping machine</Text>

								<InputField
									name={"horsePower"}
									placeholder={"Enter Horse power"}
									keyboardType={"numeric"}
									label={"Horse power"}
									onChangeText={handleChange("horsePower")}
									value={values.horsePower.toString()}
								/>
								<InputField
									name={"flowRate"}
									placeholder={"Enter flow rate"}
									keyboardType={"numeric"}
									label={"Flow rate"}
									onChangeText={handleChange("flowRate")}
									value={values.flowRate.toString()}
								/>
							</View>
							<View style={{ width: "100%", padding: 0 }}>
								<Button
									mode="outlined"
									onPress={() => handleSubmit()}
									disabled={!dirty || isSubmitting || !isValid}
								>
									Save
								</Button>
							</View>
						</View>
					)}
				</Formik>
			</View>
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0.9,
		backgroundColor: "rgba(0, 0, 0, 0)",
		borderRadius: 10,
		padding: 0,
		paddingVertical: 30,
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
		backgroundColor: "#fff",
		columnGap: 5,
		flexDirection: "row",
		borderRadius: 10,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 10,
	},
	formWrapper: {
		justifyContent: "center",
		alignItems: "center",
		gap: 25,
		width: "100%",
		flex: 1,
	},
	label: {
		color: "#000",
	},
	errorText: {
		fontSize: 12,
		color: "red",
	},
	signupTextWrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
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
	fieldset: {
		borderWidth: 1,
		borderColor: "#ffa500",
		padding: 5,
		paddingVertical: 25,
		width: "100%",
		position: "relative",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		rowGap: 10,
	},
	legend: {
		color: "#ffa500",
		position: "absolute",
		top: -15,
		left: 5,
		fontSize: 18,
		backgroundColor: "rgba(250, 250, 250, 1)",
	},
});
