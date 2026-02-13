import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useCallback,
	useContext,
	useRef,
	useState,
} from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type CustomBottomSheetContextType = {
	present: () => void;
	dismiss: () => void;
	setBottomChildren: Dispatch<SetStateAction<ReactNode | null>>;
	bottomChildren: ReactNode | null;
	modalRef: React.RefObject<BottomSheetModal>;
};

const CustomBottomSheetContext =
	createContext<CustomBottomSheetContextType | null>(null);

export const CustomBottomSheetProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const modalRef = useRef<BottomSheetModal>(null);
	const [bottomChildren, setBottomChildren] = useState<ReactNode | null>(null);

	const present = useCallback(() => {
		modalRef.current?.present();
	}, []);

	const dismiss = useCallback(() => {
		modalRef.current?.close();
	}, []);

	return (
		<CustomBottomSheetContext.Provider
			value={{
				present,
				dismiss,
				setBottomChildren,
				bottomChildren,
				modalRef,
			}}
		>
			{children}
		</CustomBottomSheetContext.Provider>
	);
};

export const useBottomSheet = () => {
	const ctx = useContext(CustomBottomSheetContext);
	if (!ctx) {
		throw new Error(
			"useBottomSheet must be used within CustomBottomSheetProvider"
		);
	}
	return ctx;
};
