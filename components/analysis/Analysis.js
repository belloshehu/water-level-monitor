import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { CustomButton } from "../CustomButton";
import RecordModal from "./RecordModal";

export default function Analysis({ children, title, icon, modalChildren }) {
	const [showModal, setShowModal] = useState(false);
	const handleViewRecord = () => {
		setShowModal(!showModal);
	};
	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				{icon}
				<Text style={styles.title}>{title}</Text>
			</View>
			{children}
			<View style={{ width: "auto" }}>
				<CustomButton
					buttonText={"View Record"}
					pressHandler={handleViewRecord}
				/>
			</View>
			<RecordModal
				visible={showModal}
				closeHandler={closeModal}
				children={modalChildren}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#000",
		gap: 20,
		padding: 20,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		borderBottomColor: "#555",
		borderBottomWidth: 5,
		borderRadius: 3,
		paddingVertical: 5,
	},
	title: {
		color: "#ffa500",
		fontSize: 22,
		fontFamily: "cursive",
	},
});
