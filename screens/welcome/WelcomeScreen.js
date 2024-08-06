import { View, StyleSheet } from "react-native";
import { WelcomeCarousel } from "./WelcomeCarousel";
import { CustomButton } from "../../components/CustomButton";

export const WelcomeScreen = ({ navigation }) => {
	const clickHandler = () => {
		navigation.navigate("Login");
	};

	return (
		<View style={styles.container}>
			<WelcomeCarousel />
			<View style={styles.buttonWrapper}>
				<CustomButton
					buttonText={"Get Started"}
					textColor={"#FFA500"}
					bgColor={"black"}
					pressHandler={clickHandler}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(255, 165, 0, 0.5)",
		padding: 0,
	},
	buttonWrapper: {
		padding: 20,
		width: "100%",
	},
});
