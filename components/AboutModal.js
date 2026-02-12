import { Modal, StyleSheet, View, Text } from "react-native";
import { CustomButton } from "./CustomButton";
import BrandName from "./brand/BrandName";

export default function AboutModal({ visible, closeHandler }) {
	return (
		<Modal visible={visible} animationType="slide" transparent={true}>
			<View style={styles.container}>
				<View style={styles.modalView}>
					<View style={styles.headtingTextWrapper}>
						<Text style={{ fontSize: 20 }}>About </Text>
						<BrandName fontSize={20} />
					</View>
					<Text style={styles.description}>
						EaseView is a device that makes it easier to pump water without
						overflow by switching your pumping machine on and off accordingly.
						It also allows monitoring of water level, and provides analysis of
						both power and water consumption which will help you to manage your
						resources effectively.
					</Text>
					<CustomButton
						buttonText={"Done"}
						pressHandler={closeHandler}
						bgColor={"white"}
						bordered={"#ffa500"}
						textColor={"#ffa500"}
					/>
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
		backgroundColor: "#fff",
		borderRadius: 20,
		marginHorizontal: "auto",
		flex: 1,
		width: "99.9%",
		marginBottom: 5,
		padding: 20,
		gap: 20,
	},
	closeButton: {
		position: "absolute",
		right: 2,
		top: 0,
	},
	headtingTextWrapper: {
		flexDirection: "row",
		alignItems: "center",
	},
	description: {
		textAlign: "center",
		lineHeight: 25,
	},
});
