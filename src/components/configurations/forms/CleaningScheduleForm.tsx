import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DatePickerInput } from "react-native-paper-dates";
import FormRadioButton from "@/components/FormRadioButton";
import { Button, RadioButton } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import { cleaningIntervals } from "@/data/settings";
import { Formik } from "formik";
import * as yup from "yup";

interface CleaningScheduleFormProps {
	configure: (value: any) => void;
}
export const CleaningScheduleForm = ({
	configure,
}: CleaningScheduleFormProps) => {
	const today = new Date();
	today.setDate(today.getDate());
	today.setHours(0, 0, 0, 0);

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
					initialValues={{
						interval: 30,
						startDate: new Date(), // initial date from which subsequent dates will be determined
					}}
					validationSchema={yup.object().shape({
						interval: yup
							.number()
							.min(20, "interval must be atleast a month")
							.required("Interval is required"),
						startDate: yup.date().required("Star date is required"),
					})}
					onSubmit={async (values) => {
						// await onAuthenticate(values.email, values.password);
						console.log(values);
						await configure(values);
						console.log(values);
					}}
				>
					{({
						handleSubmit,
						values,
						handleChange,
						isSubmitting,
						dirty,
						setFieldValue,
					}) => (
						<View style={styles.formWrapper}>
							<Text>
								You will only get cleaning schedule notification after you have
								first cleaning.
							</Text>
							<View style={styles.fieldset}>
								<Text style={styles.legend}>Cleaning Schedule</Text>
								<RadioButton.Group
									onValueChange={(value) => setFieldValue("interval", value)}
									value={values.interval.toString()}
								>
									{cleaningIntervals.map(({ value, label, id }) => (
										<FormRadioButton
											label={label}
											value={value.days.toString()}
											checked={
												value.days.toString() === values.interval.toString()
											}
											key={id}
										/>
									))}
								</RadioButton.Group>
								<DatePickerInput
									locale="en-GB"
									inputMode="start"
									onChange={(value) => setFieldValue("startDate", value)}
									value={values.startDate}
									mode="outlined"
									label={"Start date"}
									validRange={{ startDate: today }}
								/>
							</View>

							<Button
								onPress={() => handleSubmit()}
								disabled={isSubmitting || !dirty}
								mode="outlined"
							>
								Save
							</Button>
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

	formWrapper: {
		justifyContent: "center",
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
	text: {
		color: "white",
		textAlign: "center",
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
	section: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		justifyContent: "flex-start",
		width: "100%",
		padding: 10,
	},
	checbox: {
		borderColor: "#ffa500",
		borderWidth: 1,
		width: 22,
		height: 22,
	},
	radioGroup: {
		width: "100%",
		gap: 5,
	},
});
