import {BaseEntity} from "domain/base/base.entity";
import {BaseHttpResponseEntity} from "domain/base/base.spiResponse.entity";

export interface HttpMapper<T extends BaseEntity, P extends BaseHttpResponseEntity> {
	// Map an Entity to an HttpObj
	toModel(entity: T): P;

	// Map an HttpObj to an Entity
	toEntity(httpObj: P): T;
}
