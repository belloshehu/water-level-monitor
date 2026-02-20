import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Toast from "react-native-toast-message";
import { getErrorMessage } from "@/utils/auth";

export default function signup(
	email: string,
	password: string
): Promise<User | null> {
	let user = null;
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			user = userCredential.user;
		})
		.catch((error) => {
			Toast.show({
				type: "error",
				text1: "Signup failed!",
				text2: getErrorMessage(error),
			});
		});
	return user;
}
