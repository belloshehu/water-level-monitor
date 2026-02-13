import { useBottomSheet } from "@/context/BottomSheetContext";
import { StyleSheet } from "react-native";
import React from "react";
import {
	BottomSheetModal,
	BottomSheetModalProvider,
	BottomSheetScrollView,
} from "@gorhom/bottom-sheet";

const SNAP_POINTS = ["55%"];

const CustomBottomSheetHost = ({}) => {
	const { modalRef, setBottomChildren, bottomChildren } = useBottomSheet();
	// if (!bottomChildren) return null;
	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={modalRef}
				index={0}
				snapPoints={SNAP_POINTS}
				enableDynamicSizing
				onDismiss={() => setBottomChildren(null)}
				backgroundStyle={{
					backgroundColor: "rgba(250, 250, 250, 1)",
					borderWidth: 1,
					borderColor: "#aaa",
				}}
			>
				<BottomSheetScrollView contentContainerStyle={styles.content}>
					{/* children injected dynamically */}
					{bottomChildren}
				</BottomSheetScrollView>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		paddingHorizontal: 0,
	},
});

export default CustomBottomSheetHost;
