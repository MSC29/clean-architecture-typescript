export class ApiException extends Error {
	message: string;
	statusCode: number;
	stack: string;

	constructor(message: string, statusCode?: number, applicationError?: Error) {
		super();
		this.message = message;
		this.statusCode = statusCode || 400;
		this.stack = applicationError ? applicationError.stack : undefined;
	}
}
