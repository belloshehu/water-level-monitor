import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { CustomButton } from "../CustomButton";

export default function Configuration({ title, children, icon }) {
	return (
		<View style={styles.container}>
			<View style={styles.icon}>
				<Feather name="edit-2" size={24} color="black" />
			</View>
			<View style={styles.titleWrapper}>
				{icon}
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.childrenWrapper}>{children}</View>
			{/* <View style={{ marginHorizontal: 20, width: "auto" }}>
				<CustomButton
					buttonText={"Update"}
					bgColor={"#bbb"}
					textColor={"#fff"}
				/>
			</View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		borderRadius: 20,
		gap: 10,
		width: "100%",
		flex: 1,
		padding: 0,
		paddingBottom: 20,
		elevation: 1,
		justifyContent: "flex-start",
		position: "relative",
	},

	title: {
		fontSize: 20,
		fontFamily: "Cochin",
		fontWeight: "500",
		color: "#ffa500",
		textAlign: "center",
	},
	titleWrapper: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: 10,
		color: "#fff",
		backgroundColor: "#fff",
		elevation: 1,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 0,
		borderTopLeftRadius: 20,
		padding: 10,
	},
	icon: {
		position: "absolute",
		zIndex: 10,
		right: 10,
		top: 10,
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "rgba(255, 165, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
		padding: "auto",
		elevation: 10,
	},
	childrenWrapper: {
		alignItems: "flex-start",
		color: "#fff",
		paddingBottom: 10,
		fontSize: 22,
		padding: 20,
		textAlign: "center",
		alignContent: "center",
		width: "100%",
	},
});
