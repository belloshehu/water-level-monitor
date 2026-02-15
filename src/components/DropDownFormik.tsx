import { colors } from "@/contants/theme";
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
	listMode: "FLATLIST" | "SCROLLVIEW" | "MODAL";
}

const DropDownFormik = (props: DropDownFormikProps) => {
	const [openProvider, setOpenProvider] = useState(false);
	const { setFieldValue, setValues } = useFormikContext();
	const [field] = useField(props);
	return (
		<View style={styles.inputWrapper}>
			<DropDownPicker
				{...field}
				multiple={field.multiple}
				{...props}
				onSelectItem={(item: any) => {
					setValues((values: any) => {
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
				// value={field.value}
				open={openProvider}
				setOpen={setOpenProvider}
				// style={styles.input}
				setValue={(val) => {
					setFieldValue(field.name, val);
				}}
				dropDownContainerStyle={{
					backgroundColor: "#fff",
					borderRadius: 10,
					top: "100%",
					borderColor: "#fff",
				}}
				containerStyle={{
					backgroundColor: "#fff",
					gap: 2,
				}}
				style={{ backgroundColor: "#fff", borderRadius: 50 }}
				listItemLabelStyle={{
					color: "white",
				}}
				disableBorderRadius={true}
				listItemContainerStyle={{
					height: 40,
					backgroundColor: colors.primary,
					borderRadius: 20,
				}}
				itemSeparator={true}
				itemSeparatorStyle={{
					borderColor: "white",
					backgroundColor: "#fff",
					height: 3,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
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
