import { Modal, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function ConfigModal({ visible, closeHandler, children }) {
	return (
		<Modal visible={visible} animationType="slide" transparent={true}>
			<View style={styles.container}>
				<View style={styles.modalView}>
					{children}
					<Button mode="contained" onPress={closeHandler}>
						Done
					</Button>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	modalView: {
		// alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 20,
		marginHorizontal: "auto",
		flex: 1,
		width: "99.9%",
		marginBottom: 5,
		padding: 20,
	},
	closeButton: {
		position: "absolute",
		right: 2,
		top: 0,
	},
});
