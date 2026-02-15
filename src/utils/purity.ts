import { colors } from "@/contants/theme";

export const getPurityColor = (purity: string) => {
	const val = parseFloat(purity);
	if (val > 6) {
		return colors.primary;
	} else if (val > 0 && val <= 6) {
		return "red";
	} else {
		return colors.secondary;
	}
};

export const getPurityRemark = (purity: string) => {
	const val = parseFloat(purity);
	if (val > 6) {
		return "Clean";
	} else if (val > 0 && val <= 6) {
		return "Dirty";
	} else {
		return "Invalid";
	}
};
