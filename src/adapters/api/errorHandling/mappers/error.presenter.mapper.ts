import {ErrorPresenter} from 'adapters/api/errorHandling/entities/error.presenter';

import {ApiMapper} from 'application/mappers/api.mapper';

import {GenericError} from 'domain/base/generic.error.entity';
import {BasePayloadEntity} from 'domain/base/base.payloads.entity';

export class ErrorPresenterMapper implements ApiMapper<GenericError, ErrorPresenter, BasePayloadEntity> {
	toApi(entity: GenericError): ErrorPresenter {
		const presenter: ErrorPresenter = {
			statusCode: entity.statusCode || 400,
			message: entity.message
		};

		return presenter;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	toEntity(payload: BasePayloadEntity): GenericError {
		throw new Error('not implemented');
	}
}
