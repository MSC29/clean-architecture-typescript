import {BaseEntity} from "domain/base/base.entity";
import {BasePayloadEntity} from "domain/base/base.payloads.entity";
import {BasePresenterEntity} from "domain/base/base.presenter.entity";

export interface ApiMapper<T extends BaseEntity | Error, P extends BasePresenterEntity, R extends BasePayloadEntity> {
	//Map an Entity to a Presenter
	toApi(entity: T): P;

	// Map a Payload to an Entity
	toEntity(payload: R): T;
}
