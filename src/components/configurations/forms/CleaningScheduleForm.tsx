import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, StyleSheet } from "react-native";
import { cleaningIntervals } from "@/data/settings";
import DropDownFormik from "../../DropDownFormik";
import { Button } from "react-native-paper";
import { colors } from "@/contants/theme";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

type CleaningScheduleType = {};

interface CleaningScheduleFormProps {
	configure: (value: any) => void;
}
export const CleaningScheduleForm = ({
	configure,
}: CleaningScheduleFormProps) => {
	const [isChecked, setChecked] = useState(false);

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
						interval: cleaningIntervals[0],
						startDate: Date.now(), // initial date from which subsequent dates will be determined
					}}
					validationSchema={yup.object().shape({
						interval: yup
							.number()
							.min(50, "interval must be atleast a month")
							.required("Interval is required"),
						startDate: yup.number().required("Star date is required"),
					})}
					onSubmit={async (values) => {
						// await onAuthenticate(values.email, values.password);
						await configure(values);
						console.log(values);
					}}
				>
					{({ handleSubmit, values, handleChange, handleBlur, setValues }) => (
						<View style={styles.formWrapper}>
							<View style={styles.fieldset}>
								<Text style={styles.legend}>Cleaning Schedule</Text>
								<DropDownFormik
									placeholder={"Select Interval"}
									label="Cleaning Interval"
									name={"interval"}
									items={cleaningIntervals}
								/>
								<View style={styles.section}>
									<Checkbox
										value={isChecked}
										onValueChange={setChecked}
										style={styles.checbox}
										color={isChecked ? "#ffa500" : undefined}
									/>

									<Text>
										Start cleaning today ({new Date().toLocaleDateString()})
									</Text>
								</View>
							</View>

							<Text>
								You will only get cleaning schedule notification after you have
								first cleaning.
							</Text>

							<View style={{ width: "100%", padding: 0 }}>
								<Button
									style={{
										backgroundColor: isChecked
											? colors.primary
											: colors.secondary,
										borderColor: isChecked ? colors.primary : colors.secondary,
									}}
									onPress={() => handleSubmit()}
									disabled={!isChecked}
									mode="outlined"
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
});
