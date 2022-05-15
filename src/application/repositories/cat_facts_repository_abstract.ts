import {CatFactEntity} from "domain/entities/cat_fact_entity";

export interface CatFactsRepositoryAbstract {
	getRandomCatFact(): Promise<CatFactEntity>;
	getAllCatFacts(): Promise<CatFactEntity[]>;
}
