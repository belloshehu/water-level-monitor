import { Modal, Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function RecordModal({ visible, closeHandler, children }) {
	return (
		<Modal visible={visible} animationType="slide" transparent={true}>
			<View style={styles.container}>
				<View style={styles.modalView}>
					<Pressable style={styles.closeButton} onPress={closeHandler}>
						<AntDesign name="closecircleo" size={40} color="#ffa500" />
					</Pressable>
					{children}
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
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#000",
		borderRadius: 20,
		marginHorizontal: "auto",
		flex: 1,
		width: "99.9%",
		marginBottom: 5,
	},
	closeButton: {
		position: "absolute",
		right: 0,
		top: 0,
	},
});
