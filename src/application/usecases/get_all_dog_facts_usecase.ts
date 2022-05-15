import {DogFactsRepositoryAbstract} from "application/repositories/dog_facts_repository_abstract";
import {UseCaseInterface} from "application/usecases/interfaces";
import {ErrorHandling} from "application/utils/errorHandling.utils";

import {DogFactEntity} from "domain/entities/dog_fact_entity";

export class GetAllDogFactsUseCase implements UseCaseInterface {
	private repository: DogFactsRepositoryAbstract;

	constructor(repository: DogFactsRepositoryAbstract) {
		this.repository = repository;
	}

	async execute(): Promise<DogFactEntity[]> {
		try {
			return await this.repository.getAllDogFacts();
		} catch (err: unknown) {
			throw ErrorHandling.createApplicationError(err, "Cannot get all dog facts");
		}
	}
}
