import { StyleSheet, View } from "react-native";
export const OnboardingScreenWrapper = ({ children, padding }) => {
	return (
		<View
			style={{
				...styles.container,
				padding: padding || 0,
			}}
		>
			{/* <Logo /> */}
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		paddingTop: 50,
	},
	innerContainer: {
		flex: 1,
		backgroundColor: "black",
		width: "100%",
	},
});
