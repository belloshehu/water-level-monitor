import axios from "axios";

const authenticate = async (mode: string, email: string, password: string) => {
	const response = await axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyDWIZrgiLMS5hqORbM4rj0xqWss0gWVfK8`,
		{
			email,
			password,
			returnSecureToken: true,
		}
	);
	return response;
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
