import {ApiException} from "domain/base/api_exception";

export class ErrorHandling {
	static createApplicationError(applicationError: Error, errorMessage: string = "Error: an unknown error occured", errorCode: number = 400): Error {
		let message: string;
		let code: number;
		if (applicationError instanceof ApiException) {
			message = applicationError.message;
			code = applicationError.statusCode;
		} else {
			message = errorMessage;
			code = errorCode;
		}

		return new ApiException(message, code, applicationError);
	}
}
