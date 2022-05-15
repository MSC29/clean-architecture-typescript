/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {expect} from "chai";
import {Response} from "light-my-request";

export class TestResponseUtils {
	static parseJsonResponse(response: Response): any {
		return JSON.parse(response.payload);
	}

	static checkResponseOk<T>(response: Response): T {
		expect(response.statusCode).to.equal(200);

		return TestResponseUtils.parseJsonResponse(response);
	}
}
