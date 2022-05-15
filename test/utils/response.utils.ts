/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {expect} from "chai";
import {Response} from "light-my-request";

export class TestResponseUtils {
	static parseJsonResponse(response: Response): any {
		return JSON.parse(response.payload);
	}

	static checkResponseForbidden(response: Response): void {
		expect(response.statusCode).to.equal(403);

		const json: any = TestResponseUtils.parseJsonResponse(response);
		expect(json.message).to.equal("Error: resource not allowed");
	}

	static checkResponseGenericError(response: Response): void {
		expect(response.statusCode).to.equal(400);

		const json: any = TestResponseUtils.parseJsonResponse(response);
		expect(json.message).to.equal("Error: an unknown error occured");
	}

	static checkResponseApplicationError(response: Response, message: string): void {
		expect(response.statusCode).to.equal(400);

		const json: any = TestResponseUtils.parseJsonResponse(response);
		expect(json.message).to.equal(message);
	}

	static checkResponseOk<T>(response: Response): T {
		expect(response.statusCode).to.equal(200);

		return TestResponseUtils.parseJsonResponse(response);
	}
}
