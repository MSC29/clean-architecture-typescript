/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {StubbedInstance, stubObject} from "ts-sinon";

import {CatFactsRepository} from "adapters/spi/api/http_cat_facts_repository";
import {DogFactsRepository} from "adapters/spi/db/db_dog_facts_repository";
import {CatFactsRepositoryAbstract} from "application/repositories/cat_facts_repository_abstract";
import {DogFactsRepositoryAbstract} from "application/repositories/dog_facts_repository_abstract";
import {CatFactEntity} from "domain/entities/cat_fact_entity";
import {ApiException} from "domain/base/api_exception";
import {DogFactEntity} from "domain/entities/dog_fact_entity";

export class TestUnitRepositoriesUtils {
	static createCatFactsRepository(catFacts: CatFactEntity[]): StubbedInstance<CatFactsRepositoryAbstract> {
		const repo: CatFactsRepository = new CatFactsRepository(null, "fake_source");
		return stubObject<CatFactsRepositoryAbstract>(repo, {
			getAllCatFacts: new Promise((resolve: any): CatFactEntity => resolve(catFacts)),
			getRandomCatFact: new Promise((resolve: any): CatFactEntity => resolve(catFacts[0]))
		});
	}

	static createCatFactsRepositoryUnexpectedExceptions(): StubbedInstance<CatFactsRepositoryAbstract> {
		const repo: CatFactsRepository = new CatFactsRepository(null, "fake_source");
		return stubObject<CatFactsRepositoryAbstract>(repo, {
			getAllCatFacts: new Promise((resolve: any, reject: (reason?: any) => void): void => reject(new Error("oh no!"))),
			getRandomCatFact: new Promise((resolve: any, reject: (reason?: any) => void): void => reject(new Error("oh no!")))
		});
	}

	static createCatFactsRepositoryExpectedExceptions(): StubbedInstance<CatFactsRepositoryAbstract> {
		const repo: CatFactsRepository = new CatFactsRepository(null, "fake_source");
		return stubObject<CatFactsRepositoryAbstract>(repo, {
			getAllCatFacts: new Promise((resolve: any, reject: (reason?: any) => void): void => reject(new ApiException("exception in repo"))),
			getRandomCatFact: new Promise((resolve: any, reject: (reason?: any) => void): void => reject(new ApiException("exception in repo")))
		});
	}

	static createDogFactsRepository(catFacts: DogFactEntity[]): StubbedInstance<DogFactsRepositoryAbstract> {
		const repo: DogFactsRepository = new DogFactsRepository(null);
		return stubObject<DogFactsRepositoryAbstract>(repo, {
			getAllDogFacts: new Promise((resolve: any): DogFactEntity => resolve(catFacts)),
			getDogFactById: new Promise((resolve: any): DogFactEntity => resolve(catFacts[0]))
		});
	}

	static createDogFactsRepositoryUnexpectedExceptions(): StubbedInstance<DogFactsRepositoryAbstract> {
		const repo: DogFactsRepository = new DogFactsRepository(null);
		return stubObject<DogFactsRepositoryAbstract>(repo, {
			getAllDogFacts: new Promise((resolve: any, reject: (reason?: any) => void): void => reject(new Error("oh no!"))),
			getDogFactById: new Promise((resolve: any, reject: (reason?: any) => void): void => reject(new Error("oh no!")))
		});
	}

	static createDogFactsRepositoryExpectedExceptions(): StubbedInstance<DogFactsRepositoryAbstract> {
		const repo: DogFactsRepository = new DogFactsRepository(null);
		return stubObject<DogFactsRepositoryAbstract>(repo, {
			getAllDogFacts: new Promise((resolve: any, reject: (reason?: any) => void): void => reject(new ApiException("exception in repo"))),
			getDogFactById: new Promise((resolve: any, reject: (reason?: any) => void): void => reject(new ApiException("exception in repo")))
		});
	}
}
