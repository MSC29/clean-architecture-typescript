import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";
import {UseCaseInterface} from "application/usecases/interfaces";
import {ErrorHandling} from "application/utils/errorHandling.utils";

import {CatFactEntity} from "domain/entities/cat_fact_entity";

export class GetAllCatFactsUseCase implements UseCaseInterface {
	private repository: CatFactsRepositoryAbstract;

	constructor(repository: CatFactsRepositoryAbstract) {
		this.repository = repository;
	}

	async execute(): Promise<CatFactEntity[]> {
		try {
			return await this.repository.getAllCatFacts();
		} catch (err: unknown) {
			throw ErrorHandling.createApplicationError(err, "Cannot get all cat facts");
		}
	}
}
