import { get } from "http";

import {
	appRedirect,
	getTokenAction,
	onLoginAction,
	onLogoutAction,
} from "@/app/[locale]/actions";

import { User } from "@/types/models/user.model";
import { IResponse } from "@/types/services";

const BASE_URL = ""; // base url to the API

class AuthService {
	private _token: string | null = null;
	private _url = BASE_URL + "/auth";

	public async login(data: { email: string; password: string }) {
		try {
			const res = await fetch(this._url + "/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const loginRes: IResponse<User> = await res.json();

			return loginRes;
		} catch (err) {
			throw err;
		}
	}

	public async refreshToken() {
		const token = this._token ?? (await getTokenAction());

		try {
			const res = await fetch(BASE_URL + "/api/auth/refresh-token", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token?.replace(/['"]+/g, "")}`,
					"Content-Type": "application/json",
				},
			});

			// if response is 428 call logout
			if (res.status === 428) {
				await onLogoutAction();
				await appRedirect("/login");
				return;
			}

			const refreshTokenRes: IResponse<User> = await res.json();

			return refreshTokenRes;
		} catch (err) {
			throw err;
		}
	}

	public async logout() {
		try {
			const token = this._token ?? (await getTokenAction());

			const res = await fetch(this._url + "/logout", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token?.replace(/['"]+/g, "")}`,
					"Content-Type": "application/json",
				},
			});

			// if response is unauthorized call refresh token
			if (res.status === 401) {
				// call refresh token
				const refreshTokenRes = await authService.refreshToken();

				// if response is ok assign new token to this._token
				// store new token in cookies
				if (refreshTokenRes && refreshTokenRes.success) {
					this._token = refreshTokenRes.data.token;
					await onLoginAction(refreshTokenRes.data, true);
				}
			}

			const logoutRes: IResponse = await res.json();

			return logoutRes;
		} catch (err) {
			throw err;
		}
	}
}

const authService = new AuthService();

export default authService;
