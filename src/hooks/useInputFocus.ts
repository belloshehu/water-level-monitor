/*
 * Hook for applying to a subsequent input when submit button is pressed in the current input
 * Args:
 *  - None
 * Returns:
 *  - function to call to apply the focus to the input with the given reference
 *  - ref: reference of the next input
 */

import { useRef } from "react";
import { TextInput } from "react-native";

type ReturnType = [ref: React.MutableRefObject<TextInput>, focus: () => void];

export default function useInputFocus(): ReturnType {
	const ref = useRef<null | TextInput>(null);

	const focus = () => {
		ref.current.focus();
	};
	return [ref, focus];
}
