export const parseLevelAndStatusPayload = (payload: string) => {
	const [level, status] = payload.split(",");
	return { level, status };
};
