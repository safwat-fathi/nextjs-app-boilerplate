export type TMethod = "GET" | "POST" | "PUT" | "DELETE";

export type IParams = Record<string, string | string[] | undefined>;

export type IBaseResponse = {
	success: boolean;
	message: string;
};

export interface IMeta {
	previous: number | null;
	next: number | null;
	current_page: number;
	per_page: number;
	total_pages: number;
	count: number;
	total_records: number;
}

export type IPaginatedResponse<T = any> = {
	data: { records: T[]; pagination_data: IMeta };
} & IBaseResponse;

export type IResponse<T = any> =
	| {
			success: false;
			message: string;
			data: null;
			errors: Record<string, string[]>;
	  }
	| {
			success: true;
			message: string;
			data: T;
	  };

export abstract class HttpServiceAbstract<T> {
	protected abstract getList(
		route: string,
		params?: IParams,
		options?: RequestInit
	): Promise<IPaginatedResponse<T> | undefined>;

	protected abstract get(
		route: string,
		params?: IParams,
		options?: RequestInit
	): Promise<Response | undefined>;

	protected abstract post(
		route: string,
		body: string | FormData,
		_params?: IParams,
		options?: RequestInit
	): Promise<Response | undefined>;

	// rest of default methods can be implemented here ...
}
