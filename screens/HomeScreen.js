import { StyleSheet, Text, View } from "react-native";
import { LevelTextIndicator } from "../components/LevelTextIndicator";
import { MenuList } from "../components/MenuList";
import { useSelector } from "react-redux";
import { CustomButton } from "../components/CustomButton";
import { useState } from "react";
import BrandName from "../components/brand/BrandName";
import AboutModal from "../components/AboutModal";

export const HomeScreen = () => {
	const { level } = useSelector((store) => store.level);
	const [visible, setVisible] = useState(false);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hi, welcome back</Text>
			<LevelTextIndicator level={level} />
			<MenuList />
			<BrandName />
			<CustomButton
				buttonText={"About"}
				bgColor={"#ccc"}
				pressHandler={() => setVisible(true)}
			/>
			<AboutModal closeHandler={setVisible} visible={visible} />
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
