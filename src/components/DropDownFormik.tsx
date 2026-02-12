import { useFormikContext, useField } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

interface DropDownFormikProps {
	name: string;
	items: { label: string; value: any }[];
	relatedFields?: string[];
	placeholder?: string;
	label?: string;
}

const DropDownFormik = (props: DropDownFormikProps) => {
	const [openProvider, setOpenProvider] = useState(false);
	const { setFieldValue, setValues } = useFormikContext();
	const [field] = useField(props);
	return (
		<View style={styles.inputWrapper}>
			<DropDownPicker
				{...field}
				{...props}
				onSelectItem={(item) => {
					setValues((values) => {
						console.log(props.relatedFields);
						if (props.relatedFields) {
							const dependantF = props.relatedFields.map((f) => {
								return { f: item[f] };
							});
							console.log(dependantF);
						}
						return { ...values };
					});
				}}
				value={field.value}
				open={openProvider}
				setOpen={setOpenProvider}
				// style={styles.input}
				setValue={(val) => {
					setFieldValue(field.name, val);
				}}
				customItemContainerStyle={{
					borderWidth: 0,
				}}
				// itemSeparator={Separator}
				itemSeparatorStyle={{}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 16,
		height: 40,
		borderWidth: 0,
		textAlignVertical: "center",
		color: "black",
	},
	inputWrapper: {
		flexDirection: "row",
		borderRadius: 10,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 10,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
});

export default DropDownFormik;
