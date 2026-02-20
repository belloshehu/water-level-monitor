export interface IUser {
	uid: string;
	displayName: string | undefined;
	email: string;
	emailVerified: boolean;
	phoneNumber: string;
	photoURL: string | undefined;
}

export type AccountType = "consumer" | "provider";
