import {ApiException} from "domain/base/api_exception";

export class ErrorHandling {
	static createApplicationError(error: unknown, errorMessage: string = "Error: an unknown error occured", errorCode: number = 400): Error {
		let message: string;
		let code: number;
		if (error instanceof ApiException) {
			message = error.message;
			code = error.statusCode;
		} else {
			message = errorMessage;
			code = errorCode;
		}

		return new ApiException(message, code);
	}
}
