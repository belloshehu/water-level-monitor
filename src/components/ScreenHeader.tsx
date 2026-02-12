import { StyleSheet, View, Text } from "react-native";

interface ScreenHeaderProps {
	pageTitle: string;
	icon: React.ReactNode;
	description: string;
}

export default function ScreenHeader({
	pageTitle,
	icon,
	description,
}: ScreenHeaderProps) {
	return (
		<View style={style.container}>
			<View style={style.icon}>{icon}</View>
			<Text style={style.pageTitle}>{pageTitle}</Text>
			<Text style={style.pageDescription}>{description}</Text>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		borderRadius: 20,
		backgroundColor: "rgba(255, 165, 0, 0.5)",
		flex: 0.2,
		width: "100%",
		marginBottom: 10,
		padding: 15,
		alignItems: "flex-start",
		justifyContent: "center",
		gap: 0,
		elevation: 0,
		position: "relative",
	},
	pageTitle: {
		fontWeight: "bold",
		fontSize: 40,
		color: "#fff",
		textAlign: "center",
	},
	icon: {
		position: "absolute",
		top: 15,
		right: 15,
	},
	pageDescription: {
		color: "white",
	},
});
