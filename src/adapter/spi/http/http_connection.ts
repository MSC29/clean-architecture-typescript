import {AxiosResponse, AxiosStatic} from "axios";

export class HttpConnection {
	private http_driver: AxiosStatic;

	constructor(http_driver: AxiosStatic) {
		this.http_driver = http_driver;
	}

	public get<T>(url: string): Promise<AxiosResponse<T>> {
		return this.http_driver.get(url);
	}

	public post<T, P>(url: string, body: T): Promise<AxiosResponse<P>> {
		return this.http_driver.post(url, body);
	}

	public put<T, P>(url: string, body: T): Promise<AxiosResponse<P>> {
		return this.http_driver.put(url, body);
	}

	public delete<T>(url: string): Promise<AxiosResponse<T>> {
		return this.http_driver.delete(url);
	}
}
