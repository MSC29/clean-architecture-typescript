import {CatFactPresenter} from "adapters/api/cat_facts/cat_facts_presenters";

import {ApiMapper} from "application/mappers/api.mapper";

import {CatFactEntity} from "domain/entities/cat_fact_entity";
import {BasePayloadEntity} from "domain/base/base.payloads.entity";

export class CatFactPresenterMapper implements ApiMapper<CatFactEntity, CatFactPresenter, BasePayloadEntity> {
	toApi(entity: CatFactEntity): CatFactPresenter {
		const presenter: CatFactPresenter = {
			fact: entity.factTxt,
			nb_chars: entity.factLength
		};

		return presenter;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	toEntity(payload: BasePayloadEntity): CatFactEntity {
		throw new Error("not implemented");
	}
}
