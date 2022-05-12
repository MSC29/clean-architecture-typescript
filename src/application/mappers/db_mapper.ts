import {BaseEntity} from "domain/base/base.entity";
import {BaseModelEntity} from "domain/base/base.model.entity";

export interface DbMapper<T extends BaseEntity, P extends BaseModelEntity> {
	// Map an Entity to a DbModel
	toModel(entity: T): P;

	// Map a DbModel to an Entity
	toEntity(model: P): T;
}
