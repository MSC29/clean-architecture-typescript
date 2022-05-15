import {DogFactEntity} from "domain/entities/dog_fact_entity";

export interface DogFactsRepositoryAbstract {
	getDogFactById(factId: number): Promise<DogFactEntity>;
	getAllDogFacts(): Promise<DogFactEntity[]>;
}
