import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const AuthScreenHeading = ({ text, textStyle }) => {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				{/* <Text>Sightek Inc.</Text> */}
				<FontAwesome5 name="user-circle" size={50} color="#FFf" />
				<Text style={[styles.headingText, textStyle]}>{text}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "auto",
		height: 120,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		width: "100%",
		borderRadius: 30,
		elevation: 10,
		backgroundColor: "#ffa500",
	},
	wrapper: {
		backgroundColor: "rgba(217, 217, 217, .0)",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		flex: 1,
		borderRadius: 200,
	},
	headingText: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#fff",
	},
});
