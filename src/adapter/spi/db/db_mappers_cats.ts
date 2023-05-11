import {CatFact} from "adapter/spi/db/db_models_cats";
import {DbMapper} from "application/mappers/db_mapper";
import {CatFactEntity} from "domain/entities/cat_fact_entity";

export class CatFactDbMapper implements DbMapper<CatFactEntity, CatFact> {
	toEntity(model: CatFact): CatFactEntity {
		const entity: CatFactEntity = new CatFactEntity();

		entity.factTxt = model.fact;
		entity.factLength = model.length;

		return entity;
	}

	toModel(entity: CatFactEntity): CatFact {
		const model: CatFact = new CatFact();

		model.fact = entity.factTxt;
		model.length = entity.factLength;

		return model;
	}
}
