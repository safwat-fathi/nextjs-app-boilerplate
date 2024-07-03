import {
	appRedirect,
	getTokenAction,
	onLoginAction,
	onLogoutAction,
} from "@/app/[locale]/actions";

import {
	HttpServiceAbstract,
	IPaginatedResponse,
	IParams,
	IResponse,
	TMethod,
} from "@/types/services";

import { createParams } from "@/lib/utils/qs";

import authService from "./auth.service";

const BASE_URL = "";

export default class HttpService<T = {}> extends HttpServiceAbstract<T> {
	private _url: string;
	private _token: string | undefined = undefined;
	private _options: RequestInit = {};

	constructor(url: string) {
		super();
		this._url = BASE_URL + url;

		// set timeout for requests
		this._options.signal = AbortSignal.timeout(6000);
	}

	private async _request(
		route: string,
		method: TMethod,
		options?: RequestInit,
		params?: IParams,
		isFormData?: boolean
	) {
		try {
			this._token = await getTokenAction();

			this._options = {
				method,
				headers: {
					...(this._token && {
						Authorization: `Bearer ${this._token.replace(/['"]+/g, "")}`,
					}),
					...(!isFormData && {
						"Content-Type": "application/json",
					}),
					// "Accept-Language": "en",
				},
				// cache: "no-store",
				...options,
			};

			const urlParams = createParams(params || {});
			//

			const fullURL = this._url + route + "?" + urlParams.toString();

			const response = await fetch(fullURL, this._options);

			// No content response
			if (response.status === 204) return;

			if (response.status === 401) {
				// call refresh token
				const refreshTokenRes = await authService.refreshToken();

				// if response is ok assign new token to this._token
				// store new token in cookies
				if (refreshTokenRes && refreshTokenRes.success) {
					this._token = refreshTokenRes.data.token;
					await onLoginAction(refreshTokenRes.data, true);
				}

				return;
			}

			return response;
		} catch (err) {
			console.log("🚀 ~ err:", err);
			throw err;
		}
	}

	protected async get(
		route: string,
		params?: IParams,
		options?: RequestInit | undefined
	): Promise<Response | undefined> {
		const res = await this._request(route, "GET", options, params);

		return res;
	}

	protected async getList(
		route: string,
		params?: IParams,
		options?: RequestInit | undefined
	) {
		const res = await this._request(route, "GET", options, params);

		if (res) {
			const data = await res.json();
			return data;
		}

		return undefined;
	}

	protected async post(
		route: string,
		body: any,
		params?: IParams,
		options?: RequestInit
	) {
		const isFormData = body instanceof FormData;
		const dataToSend = isFormData ? body : JSON.stringify(body);

		const res = await this._request(
			route,
			"POST",
			{ ...options, body: dataToSend },
			params,
			isFormData
		);

		if (res) {
			const data = await res.json();
			return data;
		}

		return undefined;
	}

	protected async put(
		route: string,
		body: any,
		_params?: IParams,
		options?: RequestInit
	): Promise<any> {
		const isFormData = body instanceof FormData;
		const dataToSend = isFormData ? body : JSON.stringify(body);

		const res = await this._request(
			route,
			"PUT",
			{ ...options, body: dataToSend },
			_params
		);

		return res;
	}

	// protected async delete(
	//   route: string,
	//   _params?: IParams,
	//   options?: RequestInit
	// ): Promise<IResponse<T>> {
	//   const data = await this._request(route, "DELETE", { ...options }, _params)

	//   return data
	// }
}
