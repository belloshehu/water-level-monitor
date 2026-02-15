import { LevelTextIndicator } from "@/components/LevelTextIndicator";
import { CustomButton } from "@/components/CustomButton";
import { StyleSheet, Text, View } from "react-native";
import BrandName from "@/components/brand/BrandName";
import { MenuList } from "@/components/MenuList";
import AboutModal from "@/components/AboutModal";
import { useAppSelector } from "@/hooks/redux";
import { useState } from "react";

const HomeScreen = () => {
	const { retrievedLevel, retrievedPurity } = useAppSelector(
		(store) => store.ble
	);
	const [visible, setVisible] = useState(false);

	const handleClose = () => {
		setVisible(false);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hi, welcome back, {retrievedPurity}</Text>

			<LevelTextIndicator level={retrievedLevel} />
			<MenuList />
			<BrandName />
			<CustomButton
				buttonText={"About"}
				bgColor={"#ccc"}
				pressHandler={() => setVisible(true)}
			/>
			<AboutModal onClose={handleClose} visible={visible} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		paddingTop: 40,
		backgroundColor: "rgba(255, 165, 0, 0)",
		color: "black",
	},
	text: {
		fontSize: 18,
	},
});

export default HomeScreen;
