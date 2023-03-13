import {CatFact} from "adapter/spi/db/db_models_cats";
import {CatFactApiModel} from "adapter/spi/http/http_models";
import {DbConnection} from "adapter/spi/db/db_connection";
import {CatFactDbMapper} from "adapter/spi/db/db_mappers_cats";
import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";
import {HttpMapper} from "application/mappers/http_mapper";
import {ApiException} from "domain/base/api_exception";
import {CatFactEntity} from "domain/entities/cat_fact_entity";

export class CatFactsRepository implements CatFactsRepositoryAbstract {
	private dbConnection: DbConnection;
	private catFactDbMapper: HttpMapper<CatFactEntity, CatFactApiModel>;

	constructor(dbConnection: DbConnection) {
		this.dbConnection = dbConnection;
		this.catFactDbMapper = new CatFactDbMapper();
	}

	async getRandomCatFact(): Promise<CatFactEntity> {
		const dataList: CatFact[] = await this.dbConnection.getManager().getRepository(CatFact).find();
		// eslint-disable-next-line security-node/detect-insecure-randomness
		const unsafeRandom: number = Math.ceil(Math.random() * dataList.length);
		const data: CatFact = await this.dbConnection.getManager().getRepository(CatFact).findOne(unsafeRandom);

		if (data) {
			return this.catFactDbMapper.toEntity(data);
		}

		throw new ApiException("couldn't retrieve random cat fact");
	}

	async getAllCatFacts(): Promise<CatFactEntity[]> {
		const dataList: CatFact[] = await this.dbConnection.getManager().getRepository(CatFact).find();

		const entitiesList: CatFactEntity[] = [];
		dataList.forEach((data: CatFact) => entitiesList.push(this.catFactDbMapper.toEntity(data)));
		return entitiesList;
	}
}
