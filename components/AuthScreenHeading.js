import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BrandName from "./brand/BrandName";

export const AuthScreenHeading = ({ text, textStyle }) => {
	return (
		<View style={styles.container}>
			<BrandName color="white" fontSize={20} />
			<FontAwesome5 name="user-circle" size={30} color="#FFf" />
			<Text style={[styles.headingText, textStyle]}>{text}</Text>
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
	headingText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
	},
});
