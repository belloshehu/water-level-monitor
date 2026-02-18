const authenticate = async (mode: string, email: string, password: string) => {
	const body: any = {
		email,
		password,
		returnSecureToken: true,
	};
	let response = null;

	try {
		const request = new Request(
			`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
			{
				body,
				method: "POST",
			}
		);
		response = await fetch(request);
		if (response.ok) {
			return response.json();
		}
	} catch (error) {
		console.error(error);
		throw new Error(`${mode} failed:`, error);
	}
};

export const createUser = async (email: string, password: string) => {
	return await authenticate("signUp", email, password);
};

export const logInUser = async (email: string, password: string) => {
	return await authenticate("signInWithPassword", email, password);
};

export const errorMessage = (error: { message: string; code: string }) => {
	const { message, code } = error;
	switch (code) {
		case "ERR_BAD_REQUEST":
			return "Incorrect email or password";
		default:
			return "Something went wrong";
	}
};
