export interface ISerializedUser {
	uid: string;
	displayName: string | undefined;
	email: string;
	emailVerified: boolean;
	phoneNumber: string;
	photoURL: string | undefined;
}
