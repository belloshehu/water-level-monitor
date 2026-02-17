import { View, StyleSheet, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import ConfigModal from "./ConfigModal";
import { useState } from "react";

export default function Configuration({
	title,
	children,
	icon,
	modalChildren,
}) {
	const [showModal, setShowModal] = useState(false);
	const closeModal = () => {
		setShowModal(false);
	};
	const openModal = () => {
		setShowModal(true);
	};
	return (
		<View style={styles.container}>
			<Pressable style={styles.icon} onPress={openModal}>
				<Feather name="edit-2" size={24} color="black" />
			</Pressable>
			<View style={styles.titleWrapper}>
				{icon}
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.childrenWrapper}>{children}</View>

			<ConfigModal closeHandler={closeModal} visible={showModal}>
				<Text style={styles.configModalTitle}>{title} configuration</Text>
				{modalChildren}
			</ConfigModal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		borderRadius: 20,
		gap: 10,
		width: "100%",
		flex: 0.35,
		padding: 0,
		elevation: 1,
		justifyContent: "flex-start",
		position: "relative",
		paddingBottom: 8,
	},

	title: {
		fontSize: 16,
		fontFamily: "Cochin",
		fontWeight: "500",
		color: "#ffa500",
		textAlign: "center",
	},
	configModalTitle: {
		fontSize: 22,
		color: "#000",
		fontFamily: "cursive",
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
		top: 2,
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "rgba(0, 0, 0, 0)",
		justifyContent: "center",
		alignItems: "center",
		padding: "auto",
		elevation: 10,
	},
	childrenWrapper: {
		alignItems: "flex-start",
		color: "#fff",
		paddingBottom: 10,
		fontSize: 18,
		padding: 20,
		paddingTop: 0,
		textAlign: "center",
		alignContent: "center",
		width: "100%",
		gap: 3,
	},
});
