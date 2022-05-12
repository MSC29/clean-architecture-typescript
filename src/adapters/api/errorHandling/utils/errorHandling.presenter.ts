import {GenericError} from 'domain/base/generic.error.entity';
import {ErrorPresenter} from 'adapters/api/errorHandling/entities/error.presenter';
import {ErrorPresenterMapper} from 'adapters/api/errorHandling/mappers/error.presenter.mapper';

export class ErrorHandlingPresenter {
	static errorPresenterMapper: ErrorPresenterMapper = new ErrorPresenterMapper();

	static createPresenterError(error: GenericError): ErrorPresenter {
		return ErrorHandlingPresenter.errorPresenterMapper.toApi(error);
	}

	static createNotAuthorizedError(): ErrorPresenter {
		const error: GenericError = new GenericError('Error: not authenticated or token expired', 401);
		return ErrorHandlingPresenter.createPresenterError(error);
	}

	static createForbiddenError(): ErrorPresenter {
		const error: GenericError = new GenericError('Error: resource not allowed', 403);
		return ErrorHandlingPresenter.createPresenterError(error);
	}

	static createApplicationError(applicationError: Error): ErrorPresenter {
		let message: string;
		if (applicationError instanceof GenericError) {
			message = applicationError.message;
		} else {
			message = 'Error: an unknown error occured';
		}

		const error: GenericError = new GenericError(message, 400);
		return ErrorHandlingPresenter.createPresenterError(error);
	}
}
