import axios, {AxiosResponse} from "axios";

export class HttpConnection {
	public get<T>(url: string): Promise<AxiosResponse<T>> {
		return axios.get(url);
	}

	public post<T, P>(url: string, body: T): Promise<AxiosResponse<P>> {
		return axios.post(url, body);
	}

	public put<T, P>(url: string, body: T): Promise<AxiosResponse<P>> {
		return axios.put(url, body);
	}

	public delete<T>(url: string): Promise<AxiosResponse<T>> {
		return axios.delete(url);
	}
}
