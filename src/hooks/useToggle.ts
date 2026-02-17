import { useState } from "react";

export default function useToggle(defaultState = false) {
	const [state, setState] = useState(defaultState);

	const toggle = () => {
		setState((prev) => !prev);
	};

	return [state, toggle];
}
