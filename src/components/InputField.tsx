import { TextInput, TextInputProps, useTheme } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { ErrorMessage } from "formik";
import React from "react";
/* 

    TextInput with label and error text
*/

interface TextInputPropsWithName extends TextInputProps {
	name: string;
	icon?: string;
	onPressLeftIcon?: () => void;
	onPressRightIcon?: () => void;
}

export const InputField = React.forwardRef(
	(props: TextInputPropsWithName, ref: any) => {
		const { colors } = useTheme();
		return (
			<View style={styles.wrapper}>
				{/* {props.label && <Text style={{ color: labelColor }}>{props.label}</Text>} */}
				{/* <View style={styles.inputWrapper}> */}
				{/* {withIcon && props?.icon} */}
				<TextInput
					{...props}
					ref={ref}
					mode="outlined"
					style={styles.input}
					keyboardType={props.keyboardType || "default"}
					secureTextEntry={props.secureTextEntry || false}
					left={
						props.left ? (
							<TextInput.Icon
								icon={props.icon}
								onPress={props.onPressLeftIcon && props.onPressLeftIcon}
							/>
						) : null
					}
					right={
						props.right ? (
							<TextInput.Icon
								icon={props.icon}
								onPress={props.onPressRightIcon && props.onPressRightIcon}
							/>
						) : null
					}
				/>
				{/* </View> */}
				<ErrorMessage
					name={props.name}
					render={(msg) => <Text style={styles.errorText}>{msg}</Text>}
				/>
			</View>
		);
	}
);

const styles = StyleSheet.create({
	wrapper: {
		rowGap: 2,
		justifyContent: "flex-start",
		width: "100%",
		alignItems: "center",
	},
	errorText: {
		fontSize: 12,
		color: "red",
		width: "100%",
	},
	input: {
		zIndex: 0,
		fontSize: 16,
		height: 40,
		textAlignVertical: "center",
		width: "100%",
		// color: "black",
	},
	inputWrapper: {
		paddingHorizontal: 10,
		paddingVertical: 5,
		backgroundColor: "#fff",
		columnGap: 5,
		flexDirection: "row",
		borderRadius: 10,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#ccc",
		shadowRadius: 10,
		elevation: 2,
	},
});
