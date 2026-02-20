export const getFirstAndLastNames = (displayName: string | undefined) => {
	const [firstName, lastName] = displayName ? displayName.split(" ") : ["", ""];
	return { lastName, firstName };
};
