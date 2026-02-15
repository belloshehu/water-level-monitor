import { colors } from "@/contants/theme";
import { Platform, StyleSheet, ViewStyle } from "react-native";
import { RadioButton, RadioButtonItemProps } from "react-native-paper";

interface FormRadioButtonProps extends RadioButtonItemProps {
	checked?: boolean;
}

const FormRadioButton = (props: FormRadioButtonProps) => {
	return (
		<RadioButton.Item
			mode={Platform.OS === "android" ? "android" : "ios"}
			style={[
				styles.button,
				{ backgroundColor: props.checked ? colors.primary : "#fff" },
			]}
			labelStyle={[
				styles.label,
				{ color: props.checked ? "#fff" : colors.primary },
			]}
			{...props}
			uncheckedColor={colors.primary}
			color={"#fff"}
			label={props.label}
		/>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderColor: colors.primary,
		borderWidth: 0,
		width: "100%",
		justifyContent: "center",
		borderRadius: 50,
		marginBottom: 5,
		elevation: 2,
	},
	label: {
		color: colors.primary,
	},
});
export default FormRadioButton;
