import { StyleSheet, Text, View } from "react-native";
import { ReactNode, useState } from "react";
import RecordModal from "@/components/analysis/RecordModal";
// import { useBottomSheet } from "@/context/BottomSheetContext";
import { Button, Card } from "react-native-paper";
import { colors } from "@/contants/theme";

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
	// const { present, dismiss, setBottomChildren } = useBottomSheet();

	const handleViewRecord = () => {
		setShowModal(!showModal);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<Card style={styles.container}>
			<View style={styles.header}>
				{icon}
				<Text style={styles.title}>{title}</Text>
			</View>
			{children}
			<View style={{ width: "auto", marginBottom: 0, marginTop: 10 }}>
				<Button mode="outlined" onPress={handleViewRecord}>
					View chart
				</Button>
			</View>
			<RecordModal
				visible={showModal}
				onClose={closeModal}
				children={modalChildren}
			/>
		</Card>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		borderRadius: 10,
		alignItems: "flex-start",
		justifyContent: "space-around",
		backgroundColor: "#fff",
		gap: 5,
		padding: 10,
		elevation: 1,
		position: "relative",
		color: "black",
		textAlign: "left",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		gap: 10,
		borderBottomColor: "#000",
		borderBottomWidth: 0,
		borderRadius: 3,
		paddingVertical: 5,
		marginBottom: 10,
	},
	title: {
		color: colors.primary,
		fontSize: 16,
		// fontFamily: "cursive",
	},
});
