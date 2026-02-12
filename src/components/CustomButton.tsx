import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CustomButtonProps {
	buttonText: string;
	pressHandler: () => void;
	bgColor?: string;
	textColor?: string;
	bordered?: string;
	disable?: boolean;
}

export const CustomButton = ({
	buttonText,
	pressHandler,
	bgColor,
	textColor,
	bordered,
	disable = false,
}: CustomButtonProps) => {
	return (
		<TouchableOpacity
			disabled={disable}
			onPress={pressHandler}
			style={[
				styles.button,
				{ backgroundColor: bgColor || "#FFA500" },
				bordered && { borderColor: bordered, borderWidth: 2 },
			]}
		>
			<Text style={{ ...styles.text, color: textColor || "white" }}>
				{buttonText}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: -4,
			height: 2,
		},
		width: "100%",
		shadowOpacity: 0.1,
		shadowRadius: 0.3,
		elevation: 4,
	},
	text: {
		color: "white",
		fontSize: 20,
		textAlign: "center",
	},
});
