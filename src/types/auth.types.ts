import { ResponseType } from "@/types/response.types";
import { IUser } from "@/types/users.types";

export interface UserAuthType {
	user: IUser;
	token: { token: string; expiresIn: number };
}

export interface RefreshTokenType {
	refreshToken: string;
	expiresIn: number;
	token: string;
}

export interface VerificationType {
	expiresIn: number;
}
export type LoginResponseType = ResponseType<UserAuthType>;

export type RegisterResponseType = ResponseType<UserAuthType>;
export type LogoutResponseType = ResponseType<UserAuthType>;

export type GetUsersResponseType = ResponseType<IUser[]>;
export type GetUserResponseType = ResponseType<IUser>;
export type EmailVerificationCodeResponse = ResponseType<VerificationType>;
