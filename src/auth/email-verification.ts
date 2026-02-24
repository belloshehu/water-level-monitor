import { sendEmailVerification, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Toast from "react-native-toast-message";

export default function verifyEmail() {
	sendEmailVerification(auth.currentUser)
		.then(() => {
			Toast.show({
				type: "success",
				text1: "Email verification",
				text2: "Verification link sent",
			});
		})
		.catch((error) => {
			Toast.show({
				type: "error",
				text1: "Email verification failed!",
				text2: "Failed to send verification link",
			});
		});
}
