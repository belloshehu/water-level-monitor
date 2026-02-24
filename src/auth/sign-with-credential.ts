import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Toast from "react-native-toast-message";
import { getErrorMessage } from "@/utils/auth";
// Initialize Firebase Authentication and get a reference to the service

export default function login(
	email: string,
	password: string
): Promise<User | null> {
	let user = null;
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			user = userCredential;
		})
		.catch((error) => {
			console.log(error);
			Toast.show({
				type: "error",
				text1: "Login failed!",
				text2: getErrorMessage(error),
			});
		});
	return user;
}
