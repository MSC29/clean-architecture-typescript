import {DogFact} from "adapters/spi/db/db_models";
import {DbMapper} from "application/mappers/db_mapper";
import {DogFactEntity} from "domain/entities/dog_fact_entity";

export class DogFactDbMapper implements DbMapper<DogFactEntity, DogFact> {
	toEntity(model: DogFact): DogFactEntity {
		const entity: DogFactEntity = new DogFactEntity();

		entity.factId = model.id;
		entity.fact = model.fact;

		return entity;
	}

	toModel(entity: DogFactEntity): DogFact {
		const model: DogFact = new DogFact();

		model.id = entity.factId;
		model.fact = entity.fact;

		return model;
	}
}
