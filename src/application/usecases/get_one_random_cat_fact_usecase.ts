import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";
import {UseCaseInterface} from "application/usecases/interfaces";

import {CatFactEntity} from "domain/entities/cat_fact_entity";

export class GetOneRandomCatFactUseCase implements UseCaseInterface {
	private repository: CatFactsRepositoryAbstract;

	constructor(repository: CatFactsRepositoryAbstract) {
		this.repository = repository;
	}

	async execute(): Promise<CatFactEntity> {
		try {
			return await this.repository.getRandomCatFact();
		} catch (err) {
			throw err;
		}
	}
}
