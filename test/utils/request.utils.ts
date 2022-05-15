/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Response} from "light-my-request";

import server from "infrastructure/app";

export class TestRequestUtils {
	static async getRequest(url: string): Promise<Response> {
		return await server.inject({method: "GET", url});
	}
}
