import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, StyleSheet } from "react-native";
import { InputField } from "@/components/InputField";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "@/hooks/redux";
import { sendSetPointsData } from "@/redux/features/ble/listener";

interface FormValues {
	offSetPoint: number; // level at which pumping should start
	onSetPoint: number; // level at which pumping should start
}

const SetPointsConfigForm = ({ configure }) => {
	const initialValues: FormValues = {
		offSetPoint: 95,
		onSetPoint: 30,
	};
	const dispatch = useAppDispatch();
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
						onSetPoint: yup
							.number()
							.min(10, "On set point cannot be less than 10%")
							.required("Tank height is required"),
						offSetPoint: yup
							.number()
							.min(10, "Off cannot be less than 80%")
							.required("Tank diameter is required"),
					})}
					onSubmit={async (values: FormValues) => {
						// await onAuthenticate(values.email, values.password);
						console.log("Tank config:", values);
						dispatch(
							sendSetPointsData(`${values.offSetPoint}, ${values.onSetPoint}`)
						);
						await configure(values);
					}}
				>
					{({ handleSubmit, handleChange, values }) => (
						<View style={styles.formWrapper}>
							<View style={styles.fieldset}>
								<Text style={styles.legend}>Set point settings</Text>

								<InputField
									name={"onSetPoint"}
									placeholder={"On Set Point"}
									icon={"size"}
									label={"On Set Point (%)"}
									keyboardType={"numeric"}
									onChangeText={handleChange("onSetPoint")}
									value={values.onSetPoint.toString()}
								/>
								<InputField
									mode="outlined"
									keyboardType="numeric"
									name={"offSetPoint"}
									placeholder={"Enter off set point (%)"}
									icon={"tape"}
									label={"Off Set Point (%)"}
									onChangeText={handleChange("offSetPoint")}
									value={values.offSetPoint.toString()}
								/>
							</View>

							<View style={{ width: "100%", padding: 0 }}>
								<Button mode="outlined" onPress={() => handleSubmit()}>
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
		// alignItems: "center",
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
		// alignItems: "center",
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

export default SetPointsConfigForm;
