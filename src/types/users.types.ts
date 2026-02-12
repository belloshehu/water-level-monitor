export interface IUser {
	_id: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	verified?: boolean;
	verificationCode: string;
	passwordResetCode: string;
	verificationCodeExpiresBy: Date | null | string;
	profileImage: string;
	onboarded: boolean;
	currency: string;
	phoneNumber: string;
	whatsAppNumber: string;
	city: string;
	state: string;
	country: string;
	address?: string;
}

export interface IUserPayload {
	firstName: string;
	lastName: string;
	password: string;
	verified?: boolean;
	profileImage: string;
	currency: string;
	phoneNumber: string;
	whatsAppNumber: string;
	city: string;
	state: string;
	country: string;
	onBoarded?: boolean;
}

export type AccountType = "consumer" | "provider";
