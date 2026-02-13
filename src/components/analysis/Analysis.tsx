import { StyleSheet, Text, View } from "react-native";
import { ReactNode, useState } from "react";
import { CustomButton } from "@/components/CustomButton";
import RecordModal from "@/components/analysis/RecordModal";
import { useBottomSheet } from "@/context/BottomSheetContext";
import { Button } from "react-native-paper";

interface AnalysisProps {
	children: ReactNode;
	title: string;
	icon: ReactNode;
	modalChildren: ReactNode;
}
export default function Analysis({
	children,
	title,
	icon,
	modalChildren,
}: AnalysisProps) {
	const [showModal, setShowModal] = useState(false);
	const { present, dismiss, setBottomChildren } = useBottomSheet();

	const handleViewRecord = () => {
		setShowModal(!showModal);
		setBottomChildren(
			<View>
				<Text>Hello</Text>
			</View>
		);
		present();
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
			<View style={{ width: "auto", marginBottom: 0 }}>
				<Button onPress={handleViewRecord}>View chart</Button>
			</View>
			{/* <RecordModal
				visible={showModal}
				onClose={closeModal}
				children={modalChildren}
			/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.7,
		width: "100%",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: "#eee",
		gap: 20,
		padding: 20,
		elevation: 1,
		position: "relative",
		color: "black",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		gap: 10,
		borderBottomColor: "#000",
		borderBottomWidth: 2,
		borderRadius: 3,
		paddingVertical: 5,
		marginBottom: 10,
	},
	title: {
		color: "#000",
		fontSize: 22,
		fontFamily: "cursive",
	},
});
