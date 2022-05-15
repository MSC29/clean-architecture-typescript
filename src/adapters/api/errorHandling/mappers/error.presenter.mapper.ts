import {ErrorPresenter} from "adapters/api/errorHandling/entities/error.presenter";

import {ApiMapper} from "application/mappers/api.mapper";

import {ApiException} from "domain/base/api_exception";
import {BasePayloadEntity} from "domain/base/base.payloads.entity";

export class ErrorPresenterMapper implements ApiMapper<ApiException, ErrorPresenter, BasePayloadEntity> {
	toApi(entity: ApiException): ErrorPresenter {
		const presenter: ErrorPresenter = {
			statusCode: entity.statusCode || 400,
			message: entity.message
		};

		return presenter;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	toEntity(payload: BasePayloadEntity): ApiException {
		throw new Error("not implemented");
	}
}
