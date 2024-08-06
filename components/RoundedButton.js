import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const RoundedButton = ({
	text,
	clickHandler,
	customStyle,
	customStyleText,
}) => {
	return (
		<TouchableOpacity
			onPress={clickHandler}
			style={[styles.button, customStyle]}
		>
			<Text style={[styles.buttonText, customStyleText]}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		elevation: 10,
		backgroundColor: "#08566E",
		paddingVertical: 10,
		paddingHorizontal: 30,
		borderRadius: 50,
		width: "80%",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontSize: 18,
	},
});
