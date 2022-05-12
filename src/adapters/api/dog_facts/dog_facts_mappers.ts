import {DogFactPresenter} from "adapters/api/dog_facts/dog_facts_presenters";

import {ApiMapper} from "application/mappers/api.mapper";

import {DogFactEntity} from "domain/entities/dog_fact_entity";
import {BasePayloadEntity} from "domain/base/base.payloads.entity";

export class DogFactPresenterMapper implements ApiMapper<DogFactEntity, DogFactPresenter, BasePayloadEntity> {
	toApi(entity: DogFactEntity): DogFactPresenter {
		const presenter: DogFactPresenter = {
			fact_id: entity.factId,
			txt: entity.fact
		};

		return presenter;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	toEntity(payload: BasePayloadEntity): DogFactEntity {
		throw new Error("not implemented");
	}
}
