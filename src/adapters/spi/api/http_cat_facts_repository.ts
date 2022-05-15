//TODO remove that
import {AxiosResponse} from "axios";

import {HttpConnection} from "adapters/spi/api/http_connection";
import {CatFactApiModel, CatFactsApiModel} from "adapters/spi/api/http_models";
import {CatFactHttpMapper} from "adapters/spi/api/http_mappers";
import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";
import {HttpMapper} from "application/mappers/http_mapper";
import {ApiException} from "domain/base/api_exception";
import {CatFactEntity} from "domain/entities/cat_fact_entity";

export class CatFactsRepository implements CatFactsRepositoryAbstract {
	private httpConnection: HttpConnection;
	private source: string;
	private catFactHttpMapper: HttpMapper<CatFactEntity, CatFactApiModel>;

	constructor(httpConnection: HttpConnection, source: string) {
		this.httpConnection = httpConnection;
		this.source = source;
		this.catFactHttpMapper = new CatFactHttpMapper();
	}

	async getRandomCatFact(): Promise<CatFactEntity> {
		const httpData: AxiosResponse<CatFactApiModel> = await this.httpConnection.get<CatFactApiModel>(`${this.source}/fact`);

		if (httpData) {
			return this.catFactHttpMapper.toEntity(httpData.data);
		}

		throw new ApiException("couldn't retrieve random cat fact");
	}

	async getAllCatFacts(): Promise<CatFactEntity[]> {
		const httpData: AxiosResponse<CatFactsApiModel> = await this.httpConnection.get<CatFactsApiModel>(`${this.source}/facts`);

		const entitiesList: CatFactEntity[] = [];
		httpData.data.data.forEach((data: CatFactApiModel) => entitiesList.push(this.catFactHttpMapper.toEntity(data)));
		return entitiesList;
	}
}
