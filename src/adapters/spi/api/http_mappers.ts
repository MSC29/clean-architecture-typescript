import {CatFactApiModel} from "adapters/spi/api/http_models";
import {HttpMapper} from "application/mappers/http_mapper";
import {CatFactEntity} from "domain/entities/cat_fact_entity";

export class CatFactHttpMapper implements HttpMapper<CatFactEntity, CatFactApiModel> {
	toEntity(model: CatFactApiModel): CatFactEntity {
		const entity: CatFactEntity = new CatFactEntity();

		entity.factTxt = model.fact;
		entity.factLength = model.length;

		return entity;
	}

	toModel(entity: CatFactEntity): CatFactApiModel {
		const model: CatFactApiModel = new CatFactApiModel();

		model.fact = entity.factTxt;
		model.length = entity.factLength;

		return model;
	}
}
