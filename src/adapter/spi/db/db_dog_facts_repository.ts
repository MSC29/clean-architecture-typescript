import {DogFact} from "adapters/spi/db/db_models";
import {DbConnection} from "adapters/spi/db/db_connection";
import {DogFactDbMapper} from "adapters/spi/db/db_mappers";
import {DbMapper} from "application/mappers/db_mapper";
import {DogFactsRepositoryAbstract} from "application/repositories/dog_facts_repository_abstract";
import {ApiException} from "domain/base/api_exception";
import {DogFactEntity} from "domain/entities/dog_fact_entity";

export class DogFactsRepository implements DogFactsRepositoryAbstract {
	private dbConnection: DbConnection;
	private dogFactDbMapper: DbMapper<DogFactEntity, DogFact>;

	constructor(dbConnection: DbConnection) {
		this.dbConnection = dbConnection;
		this.dogFactDbMapper = new DogFactDbMapper();
	}

	async getDogFactById(factId: number): Promise<DogFactEntity> {
		const data: DogFact = await this.dbConnection.getManager().getRepository(DogFact).findOne(factId);

		if (data) {
			return this.dogFactDbMapper.toEntity(data);
		}

		throw new ApiException("couldn't retrieve Dog fact from id");
	}

	async getAllDogFacts(): Promise<DogFactEntity[]> {
		const dataList: DogFact[] = await this.dbConnection.getManager().getRepository(DogFact).find();

		const entitiesList: DogFactEntity[] = [];
		dataList.forEach((data: DogFact) => entitiesList.push(this.dogFactDbMapper.toEntity(data)));
		return entitiesList;
	}
}
