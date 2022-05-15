import {DogFactsRepositoryAbstract} from "application/repositories/dog_facts_repository_abstract";
import {UseCaseInterface} from "application/usecases/interfaces";
import {ErrorHandling} from "application/utils/errorHandling.utils";

import {DogFactEntity} from "domain/entities/dog_fact_entity";

export class GetOneDogFactByIdUseCase implements UseCaseInterface {
	private dogFactId: number;
	private repository: DogFactsRepositoryAbstract;

	constructor(dogFactId: number, repository: DogFactsRepositoryAbstract) {
		this.dogFactId = dogFactId;
		this.repository = repository;
	}

	async execute(): Promise<DogFactEntity> {
		try {
			return await this.repository.getDogFactById(this.dogFactId);
		} catch (err: unknown) {
			throw ErrorHandling.createApplicationError(err, "Cannot get single dog fact");
		}
	}
}
