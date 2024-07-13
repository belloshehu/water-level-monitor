import { StyleSheet, View, Text } from "react-native";

export default function ProfileHeader({ firstName, secondName }) {
	return (
		<View style={style.container}>
			<View style={style.avatar}>
				<Text style={style.avatarText}>
					{firstName.slice(0, 1)}
					{secondName.slice(0, 1)}
				</Text>
			</View>
			<Text style={style.names}>
				{firstName} {secondName}
			</Text>
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "start",
		gap: 20,
		elevation: 0,
	},
	avatar: {
		borderRadius: 50,
		width: 80,
		height: 80,
		color: "#fff",
		borderWidth: 5,
		borderColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(255, 165, 0, 0.1)",
	},
	avatarText: {
		fontWeight: "bold",
		fontSize: 40,
		color: "#fff",
		textAlign: "center",
		textTransform: "uppercase",
		fontFamily: "cursive",
	},
	names: {
		color: "#000",
		textAlign: "center",
		fontWeight: "600",
		fontSize: 25,
		fontFamily: "cursive",
	},
});
